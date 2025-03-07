import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Ensure useAuth is imported
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/SignUp';
import HomePage from './components/HomePage'
import RideHistory from './components/RideHistory';
import BookRide from './components/BookingDetails';

const AppContent = () => {
  const { isAuthenticated, logout } = useAuth(); // Use the context

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/home" 
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/ride-history" 
          element={isAuthenticated ? <RideHistory /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/ride-booking" 
          element={isAuthenticated ? <BookRide /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
