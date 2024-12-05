import React from 'react';
import "./Frame.css";

const Frame = () => {
  return (
    <div className="investor-profile-parent">
      <div className="investor-profile">
        <div className="frame-parent">
          {/* Profile Header Section */}
          <div className="rectangle-parent">
            <div className="frame-child" />
            
            <img 
              className="frame-item" 
              alt="" 
              src="/rectangle-3@2x.png" 
            />
            
            <img 
              className="ellipse-icon" 
              alt="" 
              src="/ellipse@2x.png" 
            />
            
            <div className="username-parent">
              <div className="username">Username</div>
              <div className="it-investor">IT Investor</div>
              <div className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed dapibus eros eu vehicula interdum.
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="button-parent">
              <div className="button">
                <div className="button-child" />
                <div className="to-set-up-a-contact-parent">
                  <div className="to-set-up">To set up a contact</div>
                  <img 
                    className="icon" 
                    alt="" 
                    src="/icon.svg" 
                  />
                </div>
              </div>
              
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="send-a-message-parent">
                  <div className="send-a-message">send a message</div>
                  <img 
                    className="union-icon" 
                    alt="" 
                    src="/union.svg" 
                  />
                </div>
              </div>
              
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="more-wrapper">
                  <div className="more">More</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills and Interests Section */}
          <div className="frame-div">
            <div className="frame-child1" />
            
            <div className="frame-wrapper">
              <div className="show-allskills-parent">
                <div className="show-allskills">Show allskills</div>
                <img
                  className="vector-11-stroke"
                  alt=""
                  src="/vector-11-stroke.svg"
                />
              </div>
            </div>
            
            <img className="vector-icon" alt="" src="/vector-18.svg" />
            <img className="frame-child2" alt="" src="/vector-16.svg" />
            
            <div className="interests">Interests</div>
            <div className="companies">Companies</div>
            
            {/* Interests List */}
            <div className="frame-group">
              <div className="frame-container">
                <div className="lorem-ipsum-dolor-sit-parent">
                  <div className="lorem-ipsum-dolor1">
                    Lorem ipsum dolor sit
                  </div>
                  <div className="followers">10.258 followers</div>
                </div>
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle-4762@2x.png"
                />
              </div>
              
              <div className="rectangle-parent1">
                <div className="frame-child3" />
                <div className="tracking-parent">
                  <div className="tracking">Tracking</div>
                  <img
                    className="vector-18-stroke"
                    alt=""
                    src="/vector-18-stroke.svg"
                  />
                </div>
              </div>
            </div>
            
            {/* Another Interests Item */}
            <div className="frame-parent1">
              <div className="frame-container">
                <div className="lorem-ipsum-dolor-sit-parent">
                  <div className="lorem-ipsum-dolor1">
                    Lorem ipsum dolor sit
                  </div>
                  <div className="followers">10.258 followers</div>
                </div>
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle-47621@2x.png"
                />
              </div>
              
              <div className="rectangle-parent1">
                <div className="frame-child3" />
                <div className="tracking-parent">
                  <div className="tracking">Tracking</div>
                  <img
                    className="vector-18-stroke"
                    alt=""
                    src="/vector-18-stroke.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer and Additional Elements */}
        <div className="corporation-2022">Corporation © 2022</div>
        
        <div className="rectangle-parent3">
          <div className="frame-child6" />
          <div className="rectangle-parent4">
            <div className="frame-child7" />
            <div className="union-parent">
              <img className="union-icon1" alt="" src="/union1.svg" />
              <div className="search">Search</div>
            </div>
          </div>
        </div>
        
        <div className="dark-theme">Dark Theme</div>
        
        <img className="investnet-1-icon" alt="" src="/investnet-1@2x.png" />
        
        {/* Various UI Elements */}
        <div className="investor-profile-child" />
        <div className="investor-profile-item" />
        <img className="investor-profile-inner" alt="" src="/group-15411.svg" />
        <div className="businesses">Businesses</div>
        <div className="investor-profile-child1" />
        <img
          className="investor-profile-child2"
          alt=""
          src="/rectangle-4808@2x.png"
        />
        <div className="posts">Posts</div>
        <div className="investor-profile-child3" />
        <div className="investor-profile-child4" />
        <div className="investor-profile-child5" />
        <div className="profile-views">Profile Views</div>
        <div className="logout">Logout</div>
        <div className="payments">Payments</div>
        <div className="investor-profile-child6" />
        <img className="group-icon" alt="" src="/group-15413.svg" />
        <div className="investor-profile-child7" />
        <div className="investor-profile-child8" />
        <img
          className="investor-profile-child9"
          alt=""
          src="/group-15419.svg"
        />
        <div className="messages">Messages</div>
        <div className="notifications">Notifications</div>
        <img
          className="investor-profile-child10"
          alt=""
          src="/group-15415@2x.png"
        />
        <div className="profile">User Profile</div>
        <img className="credit-card-icon" alt="" src="/credit-card.svg" />
        <img className="eye-icon" alt="" src="/eye.svg" />
        <img className="arrow-back-icon" alt="" src="/arrow-back.svg" />
        
        <div className="icon-button">
          <img className="star-icon" alt="" src="/star.svg" />
        </div>
        
        <div className="investor-profile-child11" />
        
        <div className="logo">
          <div className="investnet-wrapper">
            <b className="investnet">InvestNet</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;