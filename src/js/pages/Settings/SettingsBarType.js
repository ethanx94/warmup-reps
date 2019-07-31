import React from 'react';
import { List, ListItem, ListHeader, Radio } from 'react-onsenui';

import MyPage from '../../components/MyPage';

const barTypeDataSource = [
  { data: 'Olympic (45)', key: 'bar-type-olympic' },
  { data: 'Womens (35)', key: 'bar-type-womens' },
  { data: 'Standard (20)', key: 'bar-type-standard' },
  { data: 'Technique (15)', key: 'bar-type-technique' },
];

const SettingsBarType = ({ barType, setItem }) => {
  const selectedIdx = barTypeDataSource.map(d => d.key).indexOf(barType);
  const renderRow = (row, idx) => (
    <ListItem key={row.key} tappable>
      <label className="left">
        <Radio
          name="unit"
          inputId={`radio-${idx}`}
          checked={selectedIdx === idx}
          onChange={() => setItem('barType', row.key)}
        />
      </label>
      <label htmlFor={`radio-${idx}`} className="center">
        {row.data}
      </label>
    </ListItem>
  );

  return (
    <MyPage headerOptions={{ title: 'Bar Type Preferences', back: true }}>
      <List
        dataSource={barTypeDataSource}
        renderRow={renderRow}
        renderHeader={() => (
          <ListHeader>Choose Preferred Bar Type (lbs)</ListHeader>
        )}
      />
    </MyPage>
  );
};

export default SettingsBarType;
