import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  background: linear-gradient(to right, #4e6af6, #3a5bd9);
  min-height: 91.9vh;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
  }
`;

const MainContent = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  flex: 1;
`;

const TextContent = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled(Link)`
  background-color: ${props => props.primary ? 'white' : 'transparent'};
  color: ${props => props.primary ? '#8A2BE2' : 'white'};
  border: 2px solid white;
  padding: 10px 20px;
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  align-items: center;

  &:after {
    content: '→';
    margin-left: 10px;
  }
`;

const Illustration = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    top: -20px;
    left: -20px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    bottom: -30px;
    right: -30px;
  }
`;

const LandingPage = () => {
  return (
    <PageContainer>
      <MainContent>
        <TextContent>
          <Title>Let's Get Started!</Title>
          <Subtitle>
            Experience a new way of getting around town. Book your rides, plan your routes, and connect with users in real-time. Join our community and start enjoying a thrilling ride experience today!
          </Subtitle>
          <ButtonGroup>
            <Button to="/signup" primary>Get It Now</Button>
            <Button to="/login">Learn More</Button> {/* Changed to redirect to Login page */}
          </ButtonGroup>
        </TextContent>
        <Illustration />
      </MainContent>
    </PageContainer>
  );
};

export default LandingPage;
