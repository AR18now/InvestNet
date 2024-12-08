import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google:", result.user);
      navigate("/dashboard"); // Navigate to dashboard or desired page
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
    }
  };

  // Handle Email Sign-In
  const handleEmailSignIn = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in with email:", userCredential.user);
      navigate("/dashboard"); // Navigate to dashboard or desired page
    } catch (error) {
      console.error("Error during email sign-in:", error.message);
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      {" "}
      {/* Wrapped in the login-page class */}
      <div className="login-container">
        <div className="login-form-section">
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">Login to access your account</p>

          {/* Email Login Form */}
          <form className="login-form" onSubmit={handleEmailSignIn}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-field-container">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="show-password-btn"
                >
                  {showPassword ? "Hide" : "Show"} Password
                </button>
              </div>
            </div>

            <button type="submit" className="login-button">
              Sign in with Email
            </button>
          </form>

          {/* Google Sign-In */}
          <button onClick={handleGoogleSignIn} className="google-signin-button">
            Sign in with Google
          </button>

          <div className="login-footer">
            Don’t have an account?{" "}
            <a href="/signup" onClick={handleSignupRedirect}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
