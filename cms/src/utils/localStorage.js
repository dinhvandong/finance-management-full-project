// utils/localStorage.js

import axios from 'axios';

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      // Make an API request to find the user based on the token
      const response = await axios.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check the response and perform necessary checks
      const user = response.data;
      if (user) {
        // Additional checks if needed

        return true;
      } else {
        return false;
      }
    } catch (error) {
      // API request or validation failed
      return false;
    }
  }

  return false; // No token found
};