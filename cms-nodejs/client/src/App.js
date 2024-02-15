import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserInterface from './pages/UserInterface';
import UserCreatePage from './pages/UserCreatePage';
import UserEditPage from './pages/UserEditPage';
import CategoriesListPage from './pages/CategoriesListPage';
import CategoryGroupPage from './pages/CategoryGroupPage';
import CategoryGroupCreatePage from './pages/CategoryGroupCreatePage';
import CategoryGroupEditPage from './pages/CategoryGroupEditPage';
import CategoryCreatePage from './pages/CategoryCreatePage';
import CategoryEditPage from './pages/CategoryEditPage';
import TransactionPage from './pages/TransactionPage';
import TransactionCreatePage from './pages/TransactionCreatePage';
import TransactionEditPage from './pages/TransactionEditPage';
import NotificationListPage from './pages/NotificationListPage';
import NotificationCreatePage from './pages/NotificationCreatePage';
import NotificationEditPage from './pages/NotificationEditPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<UserInterface />} />
        <Route path="/admin/users" element={<UserInterface />} />
        <Route path="/admin/categories" element={<CategoriesListPage />} />
        <Route path="/admin/categories/create-new" element={<CategoryCreatePage />} />
        <Route path="/admin/categories/update/:id" element={<CategoryEditPage />} />

        <Route path="/admin/categoryGroup" element={<CategoryGroupPage />} />
        <Route path="/admin/categoryGroup/create-new" element={<CategoryGroupCreatePage />} />
        <Route path="/admin/categoryGroup/update/:id" element={<CategoryGroupEditPage />} />

        <Route path="/admin/users/create-new" element={<UserCreatePage />} />
        <Route path="/admin/users/update/:id" element={<UserEditPage />} />

        <Route path="/admin/transaction" element={<TransactionPage />} />
        <Route path="/admin/transaction/create-new" element={<TransactionCreatePage />} />
        <Route path="/admin/transaction/update/:id" element={<TransactionEditPage />} />

        <Route path="/admin/notifications" element={<NotificationListPage />} />
        <Route path="/admin/notifications/create-new" element={<NotificationCreatePage />} />
        <Route path="/admin/notifications/update/:id" element={<NotificationEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
