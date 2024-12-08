import React from "react";
import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests">
      <h3>About</h3>
      <div className="interest-list">
        <div className="interest-item">
          <img src="/assets/images/company1.jpg" alt="Company" />
          <p>
            Introducing an innovative startup bridging the gap between
            businesses and investors! Our platform is designed to foster
            meaningful connections, enabling businesses to showcase their ideas
            and growth potential while providing investors with curated
            opportunities tailored to their interests. With a seamless interface
            and advanced matching algorithms, we empower entrepreneurs to secure
            funding and mentorship while helping investors discover ventures
            that align with their financial goals and values. Our mission is to
            create a dynamic ecosystem that drives innovation, collaboration,
            and success. Join us to unlock a world of opportunities and shape
            the future of entrepreneurship and investment together!
          </p>
          <span>10,258 followers</span>
          <button>Tracking</button>
        </div>
        <div className="interest-item">
          <img src="/assets/images/company2.jpg" alt="Company" />
          <p>Lorem ipsum dolor sit</p>
          <span>10,258 followers</span>
          <button>Tracking</button>
        </div>
      </div>
    </div>
  );
};

export default Interests;
