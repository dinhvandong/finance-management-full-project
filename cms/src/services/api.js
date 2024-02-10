// api.js
import axios from 'axios';

export const ROOT_URL = "150.95.110.230";
export const API_URL_IMAGE = `http://${ROOT_URL}:8080/api/images/`;

const API_URL = `http://${ROOT_URL}:8080/api`; // Replace with your API URL
axios.defaults.baseURL = `http://${ROOT_URL}:8080`; // Replace with your backend API's base URL

// Add the following lines to set the CORS headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Specify the allowed HTTP methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Specify the allowed headers
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      username,
      password,
    }, {
      withCredentials: true,
    });
    console.log("login:", response);
    if (response.data.success === 200) {
      const token = response.data.message;
      localStorage.setItem("token", token);
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/findAll?token=${token}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user/findById?token=${token}&id=${id}`, {
      withCredentials: true,
    });
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
    const response = await axios.post(`${API_URL}/user/insert?token=${token}`, {
      withCredentials: true,
    }, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/update?token=${token}`, {
      withCredentials: true,
    }, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userID) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/user/delete?token=${token}&id=${userID}`, {
      withCredentials: true,
    })
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getGroups = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category-group/findAll?token=${token}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
export const getCategory = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category/findAll?token=${token}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryByGroupId = async (groupId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category/findAllByGroupId?token=${token}&groupId=${groupId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};


export const createGroups = async (groupData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category-group/insert?token=${token}`, groupData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (groupID, categoryData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category/insert?token=${token}&groupID=${groupID}`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const findCategory = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category/findById?token=${token}&id=${id}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getTransactions = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/transaction/findAll?token=${token}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export const findTransactionsByUserId = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/transaction/findAllByUserId?token=${token}&userId=${userId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export const createTransaction = async (transactionData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/transaction/insert?token=${token}`,
     transactionData)
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateTransaction = async (transactionData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/transaction/update?token=${token}`,
      {
        withCredentials: true,
      }, transactionData)
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateCategory = async (groupID, categoryData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category/update?token=${token}&groupID=${groupID}`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateGroups = async (groupData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/category-group/update?token=${token}`, {
      withCredentials: true,
    }, groupData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getGroupById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios
      .post(`${API_URL}/category-group/findById?token=${token}&id=${id}`, {
        withCredentials: true,
      });

    console.log("response1111:", response);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const convertDateFormat = (inputDate) => {
  let inpuDateString = inputDate + "";
  const year = inpuDateString.substring(0, 4);
  const month = inpuDateString.substring(4, 6);
  const day = inpuDateString.substring(6, 8);
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  const token = localStorage.getItem("token");
  formData.append('file', file);
  const fileResponse = await axios.post(`${API_URL}/images?token=${token}`,
    formData, {
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log("fileResponse", fileResponse);
  return fileResponse.data;
  // return await axios.post(`${API_URL}/images?token=${token}` , {
  //   withCredentials: true,
  // }, formData)
  //   .then(response => {
  //     return response.data;
  //   })
  //   .catch(error => {
  //     throw error;
  //   });
};

// Add more API functions as needed