import React from 'react';
import { List, ListItem, ListHeader, Radio } from 'react-onsenui';

import MyPage from '../../components/MyPage';

const unitsDataSource = [
  { data: 'Pounds (lbs)', key: 0 },
  { data: 'Kilograms (kgs)', key: 1 },
];

const SettingsUnits = ({ metric, setItem }) => {
  const selectedIdx = unitsDataSource.map(d => d.key).indexOf(Number(metric));

  const handleUnitsChange = idx => {
    // TODO: Recalculate min/max and each saved weight values to corresponding unit
    localStorage.setItem(
      'units',
      idx === 1 ? 'units-kilograms' : 'units-pounds',
    );
    setItem('metric', idx);
  };

  const renderRow = (row, idx) => (
    <ListItem key={idx} tappable>
      <label className="left">
        <Radio
          name="unit"
          inputId={`radio-${idx}`}
          checked={selectedIdx === idx}
          onChange={() => handleUnitsChange(idx)}
        />
      </label>
      <label htmlFor={`radio-${idx}`} className="center">
        {row.data}
      </label>
    </ListItem>
  );

  return (
    <MyPage headerOptions={{ title: 'Unit Preferences', back: true }}>
      <List
        dataSource={unitsDataSource}
        renderRow={renderRow}
        renderHeader={() => <ListHeader>Choose Preferred Units</ListHeader>}
      />
    </MyPage>
  );
};

export default SettingsUnits;
