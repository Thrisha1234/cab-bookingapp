// services/rideService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rides'; // Ensure the base API URL is correct

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  return { Authorization: `Bearer ${token}` };
};

// Function to book a ride
export const bookRide = async (rideData) => {
  try {
    const response = await axios.post(`${API_URL}/book`, rideData, {
      headers: getAuthHeader()
    });
    console.log('Ride booked:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error booking ride:', error);
    throw error;
  }
};

// Function to get ride history
export const getRideHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/history`, {
      headers: getAuthHeader()
    });
    console.log('Ride history:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getRideHistory:', error);
    throw error;
  }
};