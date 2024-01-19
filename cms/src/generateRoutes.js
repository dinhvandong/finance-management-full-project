import React from 'react';
import { Route, Routes } from 'react-router-dom';

const generateRoutes = (routes) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, component, routes: childRoutes } = route;
        const Component = require(`./components/${component}`).default;

        return (
          <Route key={index} exact path={path}>
            {/* <Component />
            {childRoutes && generateRoutes(childRoutes)} */}
          </Route>
        );
      })}
    </Routes>
  );
};

export default generateRoutes;