import React, { useContext, useState } from 'react';
import {
  List,
  ListHeader,
  ListItem,
  Input,
  Range,
  Row,
  Col,
} from 'react-onsenui';

import MyPage from '../../components/MyPage';
import GlobalContext from '../../contexts/GlobalContext';
import {
  printSet,
  calculateBarbellWeights,
  findWeight,
} from '../../util/helpers';

const Exercise = ({ data }) => {
  const { metric, barWeight, weights, stepSize } = useContext(GlobalContext);
  const shortExerciseName = data.name.toLowerCase().replace(/ /g, '-');
  const savedExerciseWeight = localStorage.getItem(shortExerciseName);
  const [currentWeight, setCurrentWeight] = useState(savedExerciseWeight ? Number(savedExerciseWeight) : 100);

  const updateWorkout = ({ target: { value } }) => {
    let targetValue = Number(value);
    if (targetValue > data.max) targetValue = data.max;
    localStorage.setItem(shortExerciseName, targetValue);
    setCurrentWeight(targetValue);
  };

  const renderWeightInputRow = (_, idx) => (
    <ListItem key={idx}>
      <Row>
        <Col width="45px">
          <Input
            type="number"
            step={5}
            min={barWeight}
            max={data.max}
            value={String(currentWeight)}
            float
            onChange={updateWorkout}
          />
        </Col>
        <Col width="80%">
          <Range
            step={5}
            min={barWeight}
            max={data.max}
            style={{ width: '100%' }}
            value={currentWeight}
            onChange={updateWorkout}
          />
        </Col>
      </Row>
    </ListItem>
  );

  const renderCalculationRow = (workout, idx) => {
    const setWeight = findWeight(workout, currentWeight, stepSize, barWeight);
    const setString = `
    ${printSet(
    workout.sets,
    workout.reps,
    setWeight,
    metric,
  )} (${calculateBarbellWeights(setWeight, barWeight, weights)})
    `;
    return (
      <ListItem key={idx}>
        <div className="center">{setString}</div>
      </ListItem>
    );
  };

  return (
    <MyPage
      headerOptions={{
        title: data.name,
        back: true,
      }}
    >
      <List
        dataSource={[0]}
        renderHeader={() => <ListHeader>Choose your working weight</ListHeader>}
        renderRow={renderWeightInputRow}
      />
      <List
        dataSource={data.workouts}
        renderHeader={() => <ListHeader>Calculations</ListHeader>}
        renderRow={renderCalculationRow}
      />
    </MyPage>
  );
};

export default Exercise;
