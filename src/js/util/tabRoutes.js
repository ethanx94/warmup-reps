import React from 'react';

import Programs from '../pages/Programs';
import Settings from '../pages/Settings';

const withTabProps = (InputComponent, key, activeIndex, tabbar, navigator) => (
  <InputComponent
    active={activeIndex === key}
    key={key}
    tabbar={tabbar}
    navigator={navigator}
  />
);

const tabRoutes = [
  {
    component: Programs,
    title: 'Programs',
    icon: 'md-map',
  },
  {
    component: Settings,
    title: 'Settings',
    icon: 'md-settings',
  },
];

export { tabRoutes, withTabProps };
