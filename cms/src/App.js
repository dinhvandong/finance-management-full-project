import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/common/PrivateRoute';
import Admin from './pages/Admin';
import Typography from './pages/Typography';
import HelperClasses from './pages/HelperClasses';
import Widgets from './pages/Widgets';
import UserInterface from './pages/UserInterface';
import Form from './pages/Form';
import Tables from './pages/Tables';
import Medias from './pages/Medias';
import Charts from './pages/Charts';
import ExamplePages from './pages/ExamplePages';
import Maps from './pages/Maps';
import MultiLevelMenu from './pages/MultiLevelMenu';

const App = () => {
  // const routes = routesData.routes;
 // const isAuthenticated = false;
 //isAuthenticated={isAuthenticated}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard}  />}
        />
        <Route path="/admin" element={<PrivateRoute component={Admin}  />}></Route>
        <Route path="/admin/typography" element={<PrivateRoute component={Typography}  />} />
        <Route path="/admin/helperclasses" element={<PrivateRoute component={HelperClasses}  />} />
        <Route path="/admin/widgets" element={<PrivateRoute component={Widgets}  />} />
        <Route path="/admin/ui" element={<PrivateRoute component={UserInterface}  />} />
        <Route path="/admin/form" element={<PrivateRoute component={Form}  />} />
        <Route path="/admin/tables" element={<PrivateRoute component={Tables}  />} />
        <Route path="/admin/medias" element={<PrivateRoute component={Medias}  />} />
        <Route path="/admin/charts" element={<PrivateRoute component={Charts}  />} />
        <Route path="/admin/examplepages" element={<PrivateRoute component={ExamplePages}  />} />
        <Route path="/admin/maps" element={<PrivateRoute component={Maps}  />} />
        <Route path="/admin/mlm" element={<PrivateRoute component={MultiLevelMenu}  />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;