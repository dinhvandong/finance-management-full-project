// AppStateContext.js

import React, { createContext, useState } from 'react';

const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    // Define your initial app state here
    // Example:
    user: null,
    theme: 'light',
    // ...
  });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };