import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import styled from 'styled-components';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  height: 91.9vh;
  background-color: #f0f2f5;
`;

const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(to right, #4e6af6, #3a5bd9);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  text-align: left;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4e6af6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: #d0d0d0; /* Change color on hover */
  }
`;

const AdventureText = styled.h1`
  font-size: 2.5rem;
  animation: fadeInUp 1s ease-in-out;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', credentials);
      if (response.data.token) {
        await login(response.data.token);
        navigate('/home');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <LoginContainer>
      <LeftPanel>
        <AdventureText>Have A Great Ride</AdventureText>
        <p>Book a ride for your destination</p>
      </LeftPanel>
      <RightPanel>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Hello! Welcome back</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Login</Button>
          <SocialLogin>
            <SocialIcon href="https://www.google.com/?hl=login" target="_blank" rel="noopener noreferrer">
              <FaGoogle style={{ color: '#DB4437', width: '20px', height: '20px' }} />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ color: '#4267B2', width: '20px', height: '20px' }} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ color: '#1DA1F2', width: '20px', height: '20px' }} />
            </SocialIcon>
          </SocialLogin>
        </LoginForm>
      </RightPanel>
    </LoginContainer> 
  );
};

export default Login;
