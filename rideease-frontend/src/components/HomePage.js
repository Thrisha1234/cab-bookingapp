import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
   background: linear-gradient(to right, #4e6af6, #3a5bd9);
`;

const Navbar = styled.nav`
  background-color: #00a2ff;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
  }
`;

const HeroSection = styled.div`
 
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  background-color: ${props => props.primary ? '#00a2ff' : 'white'};
  color: ${props => props.primary ? 'white' : '#00a2ff'};
`;

const FeaturesSection = styled.div`
  padding: 50px;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 50px;
`;

const FeatureGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  width: 200px;
  margin-bottom: 30px;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #00a2ff;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`;

const HomePage = () => {
  return (
    <PageContainer>
    
      
      <HeroSection>
        <HeroTitle>Clean & Fully Modern Design</HeroTitle>
        <HeroSubtitle>Experience the future of ride-sharing with RideEase</HeroSubtitle>
        <ButtonGroup>
          <Button to="/demo" primary>Live Demo</Button>
          <Button to="/signup">Get Now</Button>
        </ButtonGroup>
      </HeroSection>
      
      <FeaturesSection>
        <FeatureTitle>Features</FeatureTitle>
        <FeatureGrid>
          <FeatureItem>
            <FeatureIcon>
              <svg viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </FeatureIcon>
            <h4>Easy Booking</h4>
            <p>Book your ride with just a few taps</p>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </FeatureIcon>
            <h4>Real-time Tracking</h4>
            <p>Know exactly where your ride is</p>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </FeatureIcon>
            <h4>Secure Payments</h4>
            <p>Pay safely with our secure system</p>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
            </FeatureIcon>
            <h4>24/7 Support</h4>
            <p>We're here to help anytime</p>
          </FeatureItem>
        </FeatureGrid>
      </FeaturesSection>
    </PageContainer>
  );
};

export default HomePage;