import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #00a2ff;
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
`;

const RideItem = styled.div`
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const RideDetails = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

const VehicleAndCost = styled.p`
  margin: 5px 0;
  font-weight: bold;
  color: #00a2ff;
`;

const RideHistory = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRideHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Fetching ride history...');
        const response = await axios.get('http://localhost:5000/api/rides/history', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Ride history response:', response.data);
        setRides(response.data);
      } catch (error) {
        console.error('Error fetching ride history:', error);
      }
    };

    fetchRideHistory();
  }, []);

  return (
    <HistoryContainer>
      <Title>Ride History</Title>
      {rides.map((ride, index) => (
        <RideItem key={index}>
          <RideDetails>From: {ride.pickup}</RideDetails>
          <RideDetails>To: {ride.destination}</RideDetails>
          <RideDetails>Date: {new Date(ride.date).toLocaleString()}</RideDetails>
          <VehicleAndCost>
            Vehicle: {ride.vehicleType} | Cost: ${ride.price}
          </VehicleAndCost>
        </RideItem>
      ))}
    </HistoryContainer>
  );
};

export default RideHistory;
