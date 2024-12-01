import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import './AuthPages.css';

const AuthPages = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login Data:', formData);

      // Simulate authentication logic
      if (formData.email === 'ali@example.com' && formData.password === '123456') {
        alert('Login successful!');
        setIsAuthenticated(true); // Switch to dashboard
      } else {
        alert('Invalid credentials!');
      }
    } else {
      console.log('Signup Data:', formData);
      alert('Signup successful! You can now log in.');
      setIsLogin(true); // Switch to login mode
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-new-container">
      <div className="auth-new-card">
        <div className="auth-new-header">
          <h2>{isLogin ? 'Welcome Back!' : 'Join Us Today!'}</h2>
          <p>{isLogin ? 'Login to continue.' : 'Sign up to get started.'}</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-new-form">
          {!isLogin && (
            <div className="auth-new-group">
              <User className="auth-new-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}
          <div className="auth-new-group">
            <Mail className="auth-new-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-new-group">
            <Lock className="auth-new-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-new-submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="auth-new-footer">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="auth-new-link"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="auth-new-link"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
