import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios';  // Import axios
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Container,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';

const AuthPages = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    // Using POST request to send email and password in the body
    const response = await axios.post(
      'http://localhost:5000/api/users/login', // Assuming you have a POST endpoint for login
      {
        email: formData.email,
        password: formData.password,
      }
    );

      if (response.data) {
        setUser(response.data);
        alert('User loggedin successfully!');
        setIsAuthenticated(true);  // You can set this to true based on the result
      }
    } catch (err) {
      setError(err.response?.data?.message || 'User not found');
      setOpenSnackbar(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
    setError('');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#bbdefb', // Light blue background for the entire page
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            backgroundColor: '#e3f2fd', // Slightly darker blue for the card
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1e88e5' }}>
            Admin Login
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: '#1e88e5', marginBottom: '20px' }}
          >
            Enter your email and password.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#fff',
                  borderRadius: '8px',
                },
              }}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#fff',
                  borderRadius: '8px',
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                padding: '12px',
                background: '#1976d2',  // This is a blue shade

                '&:hover': {
                  background: '#ff0077',
                },
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={closeSnackbar}>
        <Alert severity="error" onClose={closeSnackbar}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AuthPages;
