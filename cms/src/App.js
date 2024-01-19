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
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/admin" element={<PrivateRoute component={Admin} isAuthenticated={isAuthenticated} />}></Route>
        <Route path="/admin/typography" element={<PrivateRoute component={Typography} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/helperclasses" element={<PrivateRoute component={HelperClasses} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/widgets" element={<PrivateRoute component={Widgets} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/ui" element={<PrivateRoute component={UserInterface} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/form" element={<PrivateRoute component={Form} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/tables" element={<PrivateRoute component={Tables} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/medias" element={<PrivateRoute component={Medias} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/charts" element={<PrivateRoute component={Charts} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/examplepages" element={<PrivateRoute component={ExamplePages} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/maps" element={<PrivateRoute component={Maps} isAuthenticated={isAuthenticated} />} />
        <Route path="/admin/mlm" element={<PrivateRoute component={MultiLevelMenu} isAuthenticated={isAuthenticated} />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;