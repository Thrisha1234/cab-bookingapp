import axios from 'axios';
const API_URL = 'http://localhost:5000/api/auth';

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${profileData.id}`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};
// services/authService.js (adjust this accordingly)
 // Adjust this for local testing or deployment

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error.response?.data || error.message);
    throw error; // Propagate the error
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error; // Propagate the error
  }
};

// Other user-related methods...
