// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/'; // Replace with your API URL

export const login = async ({username, password}) =>{
  try {
    const response = await axios.post(`${API_URL}/signin`);

    const token = response.data.data.message;
    localStorage.setItem({"token": token});
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getUsers = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };

export const getUserFromToken = async (token) =>{
    try {
        const response = await axios.get(`${API_URL}/user/findByToken`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
};

// Add more API functions as needed