import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUserProfile, updateUserProfile } from '../services/userService';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
`;

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = '123'; // Replace with actual user ID (e.g., from authentication)
        const userProfile = await getUserProfile(userId);
        setProfile(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(profile);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ProfileContainer>
      <h2>User Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={profile.phone}
          onChange={handleChange}
        />
        <Button type="submit">Update Profile</Button>
      </Form>
    </ProfileContainer>
  );
}

export default Profile;