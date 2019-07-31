import React, { useState, useEffect } from 'react';

import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }) => {
  const [context, setContext] = useState({
    metric: localStorage.getItem('units') === 'units-kilograms',
    programs: [],
    barWeight: 0,
    weights: [],
    stepSize: 0,
    barType: localStorage.getItem('barType') || 'bar-type-olympic',
  });

  const setItem = (key, value) =>
    setContext(prevContext => ({ ...prevContext, [key]: value }));

  useEffect(() => {
    const deriveBarWeight = () => {
      switch (context.barType) {
        case 'bar-type-standard':
          return context.metric ? 10 : 20;
        case 'bar-type-technique':
          return context.metric ? 7.5 : 15;
        case 'bar-type-womens':
          return context.metric ? 15 : 35;
        default:
          // bar-type-olympic
          return context.metric ? 20 : 45;
      }
    };

    setContext(prevContext => ({
      ...prevContext,
      barWeight: deriveBarWeight(),
      weights: context.metric
        ? [20, 15, 10, 5, 2.5, 1.25]
        : [45, 35, 25, 10, 5, 2.5],
      stepSize: context.metric ? 2.5 : 5,
    }));
  }, [context.barType, context.metric]);

  return (
    <GlobalContext.Provider
      value={{
        ...context,
        setItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
