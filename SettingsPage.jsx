import React, { useState } from 'react';
import { Save, User, Lock, Bell } from 'lucide-react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>
      
      <div className="settings-section">
        {/* Profile Settings */}
        <div className="settings-card">
          <h2 className="settings-card-title">
            <User className="icon" />
            Profile Settings
          </h2>
          <div className="input-container">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input type="text" className="input-field" placeholder="John Doe" />
            </div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input type="email" className="input-field" placeholder="john@example.com" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="settings-card">
          <h2 className="settings-card-title">
            <Lock className="icon" />
            Security
          </h2>
          <div className="settings-option">
            <div>
              <h3 className="option-title">Two-Factor Authentication</h3>
              <p className="option-description">Add an extra layer of security</p>
            </div>
            <input
              type="checkbox"
              checked={twoFactorAuth}
              onChange={(e) => setTwoFactorAuth(e.target.checked)}
            />
          </div>
          <button className="link-button">Change Password</button>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <h2 className="settings-card-title">
            <Bell className="icon" />
            Notifications
          </h2>
          <div className="settings-option">
            <div>
              <h3 className="option-title">Push Notifications</h3>
              <p className="option-description">Receive notifications about important updates</p>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </div>
          <div className="settings-option">
            <div>
              <h3 className="option-title">Marketing Emails</h3>
              <p className="option-description">Receive emails about new features and updates</p>
            </div>
            <input
              type="checkbox"
              checked={marketingEmails}
              onChange={(e) => setMarketingEmails(e.target.checked)}
            />
          </div>
        </div>
      </div>

      <div className="save-button-container">
        <button className="save-button">
          <Save className="icon" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
