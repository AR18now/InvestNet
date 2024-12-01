import React, { useState } from 'react';
import {
  Bell,
  Users,
  FileCheck,
  Flag,
  BarChart2,
  Search,
  Menu
} from 'lucide-react';
import Sidebar from './Sidebar';
import UserManagement from './UserManagement';
import BusinessVerification from '../../BusinessVerification';
import SettingsPage from './SettingsPage';
import HelpCenter from './HelpCenter';
import './AdminDashboard.css';
import logo from './investnet.png'; // Import your logo image

const AdminDashboard = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('users');

  const stats = {
    totalUsers: 2458,
    pendingVerifications: 15,
    flaggedContent: 8,
    activeBusinesses: 384
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="main-content">
        <header className="top-header">
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="icon" />
          </button>

          <div className="header-content">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>

            <div className="search-container">
              <div className="search-box">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search users, businesses, or content..."
                  className="search-input"
                />
              </div>
            </div>

            <button className="notification-button">
              <Bell className="icon" />
            </button>
          </div>
        </header>

        <main className="dashboard-main">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon-container blue">
                  <Users className="stat-icon" />
                </div>
                <div className="stat-info">
                  <p className="stat-label">Total Users</p>
                  <p className="stat-value">{stats.totalUsers}</p>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon-container yellow">
                  <FileCheck className="stat-icon" />
                </div>
                <div className="stat-info">
                  <p className="stat-label">Pending Verifications</p>
                  <p className="stat-value">{stats.pendingVerifications}</p>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon-container red">
                  <Flag className="stat-icon" />
                </div>
                <div className="stat-info">
                  <p className="stat-label">Flagged Content</p>
                  <p className="stat-value">{stats.flaggedContent}</p>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon-container green">
                  <BarChart2 className="stat-icon" />
                </div>
                <div className="stat-info">
                  <p className="stat-label">Active Businesses</p>
                  <p className="stat-value">{stats.activeBusinesses}</p>
                </div>
              </div>
            </div>
          </div>
       
         
        </main>
        {activeTab === 'users' && <UserManagement />}
          {activeTab === 'verification' && <BusinessVerification />}
          {activeTab === 'settings' && <SettingsPage />}
          {activeTab === 'help' && <HelpCenter />}
      </div>
    </div>
  );
};

export default AdminDashboard;
