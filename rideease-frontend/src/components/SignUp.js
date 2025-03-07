import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importing icons

// Styled Components
const SignupContainer = styled.div`
  display: flex;
  height: 91.9vh;
  background-color: #f0f2f5;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #4e6af6;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 50px; // Adjusted padding for more space
  text-align: left; // Align text to the left
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
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

const SocialSignup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f2f5;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }
`;

// New styles for headings and paragraphs
const Title = styled.h1`
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.p`
  font-size: 18px; // Medium font size
  margin-bottom: 30px; // Space below the description
  line-height: 1.5; // Increase line height for better readability
`;

// Signup Component
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error.response.data);
      setError(error.response.data.message || 'An error occurred during signup');
    }
  };

  return (
    <SignupContainer>
      <LeftPanel>
        <Title>Safe Ride</Title>
        <Description>Create an account and start your journey with us</Description>
      </LeftPanel>
      <RightPanel>
        <SignupForm onSubmit={handleSubmit}>
          <h2>Create Your Account</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button type="submit">Sign Up</Button>
          <SocialSignup>
            <SocialIcon href="https://www.google.com/login" target="_blank" rel="noopener noreferrer">
              <FaGoogle style={{ color: '#DB4437', width: '20px', height: '20px' }} />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ color: '#4267B2', width: '20px', height: '20px' }} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ color: '#1DA1F2', width: '20px', height: '20px' }} />
            </SocialIcon>
          </SocialSignup>
        </SignupForm>
      </RightPanel>
    </SignupContainer>
  );
};

export default Signup;
