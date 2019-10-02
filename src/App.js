import React from 'react';
import { Navigator } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import GlobalProvider from './js/contexts/GlobalProvider';
import Main from './js/pages/Main';
import './css/main.css';

const App = () => (
  <GlobalProvider>
    <Navigator
      initialRoute={{
        component: Main,
        props: { key: 'main' },
      }}
      renderPage={(route, navigator) => {
        const props = route.props || {};
        props.navigator = navigator;
        return React.createElement(route.component, props);
      }}
    />
  </GlobalProvider>
);

export default App;
