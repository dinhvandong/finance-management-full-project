// utils/localStorage.js
import axios from 'axios';
const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await axios.get(`${API_URL}/user/findToken?token=${token}`, {
        withCredentials: true,
      },);
      const user = response.data;
      if (user.data) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  return false;
};