import React from 'react';
import { List, ListHeader, ListItem } from 'react-onsenui';

import MyPage from '../../components/MyPage';
import Exercise from './Exercise';

const Program = ({ data, navigator }) => (
  <MyPage
    headerOptions={{
      title: data.title,
      back: true,
    }}
  >
    <List
      dataSource={data.exercises}
      renderHeader={() => <ListHeader>Choose an Exercise</ListHeader>}
      renderRow={(row, idx) => (
        <ListItem
          tappable
          key={idx}
          onClick={() =>
            navigator.pushPage({
              component: Exercise,
              props: {
                data: data.exercises[idx],
              },
            })
          }
        >
          {row.name}
        </ListItem>
      )}
    />
  </MyPage>
);

export default Program;
