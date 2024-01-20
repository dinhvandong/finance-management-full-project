// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      username,
      password,
    });

    const token = response.data.message;
    console.log("Token:", token);
    localStorage.setItem("token", token);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getUsers = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/findAll`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response", response)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserFromToken = async (token) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user/findByToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Add more API functions as needed