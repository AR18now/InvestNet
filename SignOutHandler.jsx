import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any authentication tokens or user data from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Redirect to login page
    navigate('/auth');
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default SignOutHandler;