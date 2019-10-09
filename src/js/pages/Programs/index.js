import React from 'react';
import { List, ListItem, ListHeader } from 'react-onsenui';

import MyPage from '../../components/MyPage';
import Program from './Program';
import programList from '../../../programs/programList';

const Programs = ({ navigator }) => (
  <MyPage headerOptions={{ title: 'Programs' }}>
    <List
      dataSource={programList}
      renderHeader={() => <ListHeader>Choose a program</ListHeader>}
      renderRow={({ key, data }) => (
        <ListItem
          key={key}
          tappable
          onClick={() =>
            navigator.pushPage({
              component: Program,
              props: {
                data,
              },
            })
          }
        >
          {data.title}
        </ListItem>
      )}
    />
  </MyPage>
);

export default Programs;
