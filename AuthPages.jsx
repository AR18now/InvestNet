import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
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
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (formData.email === 'ali@example.com' && formData.password === '123456') {
        alert('Login successful!');
        setIsAuthenticated(true);
      } else {
        setError('Invalid credentials!');
        setOpenSnackbar(true);
      }
    } else {
      alert('Signup successful! You can now log in.');
      setIsLogin(true);
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
            {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: '#1e88e5', marginBottom: '20px' }}
          >
            {isLogin ? 'Login to continue.' : 'Sign up to get started.'}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            {!isLogin && (
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <User />
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
            )}
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
                background: '#ff4081',
                '&:hover': {
                  background: '#ff0077',
                },
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </Box>
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: '#1e88e5' }}>
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
              <Button
                variant="text"
                onClick={() => setIsLogin((prev) => !prev)}
                size="small"
                sx={{ color: '#1e88e5', fontWeight: 'bold' }}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </Button>
            </Typography>
          </Grid>
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
