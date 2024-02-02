// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL
axios.defaults.baseURL = 'http://localhost:8080'; // Replace with your backend API's base URL

// Add the following lines to set the CORS headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Specify the allowed HTTP methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Specify the allowed headers
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      username,
      password,
    },{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace '*' with your server domain if known
      },
    });
    if(response.data.success === 200){
      const token = response.data.message;
      localStorage.setItem("token", token);
      return response.data;
    }else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/findAll?token=${token}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user/findById?token=${token}&id=${id}`);
    return response.data.data;
  } catch (error) {
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
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/insert?token=${token}`, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/update?token=${token}`, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userID) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/delete?token=${token}&id=${userID}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Add more API functions as needed