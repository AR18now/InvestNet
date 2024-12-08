import React from "react";
import "./SignupPage.css";

const Signup = () => {

let style = {

  boxSizing: "border-box",
  background: "linear-gradient(120deg, #3498db, #8e44ad)", /* Updated gradient for more vibrant colors */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  marginLeft:"350px",
  marginTop:"50px"

}



  return (
    <div className="signup-page">


      <div className="signup-container" style={style}>
        <div className="signup-form-container">
          {/* Left Section with Image */}
          <div className="signup-image-section">
            <img
              style={{ height: "100%", width: "100%" }}
              src="
                  data:image/jpeg;base64,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
        
              "
              alt="Signup Visual"
              className="signup-image"
            />
          </div>

          {/* Right Section with Form */}
          <div className="signup-form-section">
            <h2 className="signup-title">Create Your Account</h2>
            <p className="signup-subtitle">
              Join us and unlock endless opportunities.
            </p>

            <form className="signup-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a strong password"
                />
              </div>

              {/* Signup Button */}
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>

            <p className="signup-footer">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
