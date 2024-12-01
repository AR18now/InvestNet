import React from 'react';
import { 
  Users, 
  FileCheck, 
  Flag, 
  BarChart2,
  X,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { icon: Users, label: 'User Management', id: 'users' },
    { icon: FileCheck, label: 'BusinessVerification', id: 'verification' },
    { icon: Flag, label: 'Flagged Content', id: 'flagged' },
    { icon: BarChart2, label: 'Analytics', id: 'analytics' },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: HelpCircle, label: 'Help Center', id: 'help' },
  ];

  return (
    <>
      <div className={`sidebar ${isMobileOpen ? 'sidebar-mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Admin Panel</h1>
          <button 
            className="mobile-close-button"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="icon" />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false);
              }}
            >
              <item.icon className="nav-icon" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sign-out-button">
            <LogOut className="nav-icon" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;