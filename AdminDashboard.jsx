import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  TextField,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popper,
  Paper,
  ClickAwayListener,
} from '@mui/material';
import { Bell, Search, Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import UserManagement from './UserManagement';
import BusinessVerification from './BusinessVerification';
import FlaggedContentPage from './FlaggedContentPage';
import AnalyticsPage from './AnalyticsPage';
import SettingsPage from './SettingsPage';
import HelpCenter from './HelpCenter';
import NotificationsPage from './NotificationsPage';
import logo from './investnet.png';
import InvestorBusinessPosts from './InvestorBusinessPosts';


const AdminDashboard = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('users'); // Default active tab
  const [showNotifications, setShowNotifications] = useState(false); // Notifications toggle
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNotificationClick = () => {
    setShowNotifications(true);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowNotifications(false); // Close notifications when switching tabs
  };

  const sidebarItems = [
    { name: 'User Management', tab: 'users' },
    { name: 'Business Verification', tab: 'verification' },
    { name: 'Flagged Content', tab: 'flagged' },
    { name: 'Analytics', tab: 'analytics' },
    { name: 'Settings', tab: 'settings' },
    { name: 'Help Center', tab: 'help' },
    { name: 'Investor & Business Posts', tab: 'posts' }

  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const results = sidebarItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
      setSearchAnchorEl(event.currentTarget);
    } else {
      setSearchResults([]);
      setSearchAnchorEl(null);
    }
  };

  const handleSearchResultClick = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');
    setSearchResults([]);
    setSearchAnchorEl(null);
  };

  const handleCloseSearchResults = () => {
    setSearchResults([]);
    setSearchAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
  position="fixed"
  sx={{
    zIndex: (theme) => theme.zIndex.drawer + 1,
    height: '80px', // Increased height for the AppBar
  }}
>
  <Toolbar
    sx={{
      minHeight: '80px', // Match the AppBar height
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ display: { sm: 'none' } }} // Show only on mobile
    >
      <Menu />
    </IconButton>
    <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '16px' }} />
    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
      Admin Dashboard
    </Typography>
    <Box sx={{ position: 'relative' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        sx={{
          backgroundColor: 'white',
          borderRadius: 1,
          mr: 2,
          '& input': { padding: '8px' },
        }}
        InputProps={{
          startAdornment: <Search style={{ marginRight: '8px' }} />,
        }}
      />
      {searchResults.length > 0 && (
        <Popper
          open
          anchorEl={searchAnchorEl}
          placement="bottom-start"
          style={{ zIndex: 1300, width: '250px' }}
        >
          <ClickAwayListener onClickAway={handleCloseSearchResults}>
            <Paper>
              <List>
                {searchResults.map((result) => (
                  <ListItem key={result.tab} disablePadding>
                    <ListItemButton onClick={() => handleSearchResultClick(result.tab)}>
                      <ListItemText primary={result.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </ClickAwayListener>
        </Popper>
      )}
    </Box>
    <IconButton color="inherit" onClick={handleNotificationClick}>
      <Badge badgeContent={4} color="secondary">
        <Bell />
      </Badge>
    </IconButton>
  </Toolbar>
</AppBar>


      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        activeTab={activeTab}
        setActiveTab={handleTabClick} // Update active tab and hide notifications
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: `240px` }, // Sidebar width
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar /> {/* Adds spacing for AppBar */}
        {showNotifications ? (
          <NotificationsPage setActiveTab={handleTabClick} /> // Pass the tab updater
        ) : (
          <>
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'verification' && <BusinessVerification />}
            {activeTab === 'flagged' && <FlaggedContentPage />}
            {activeTab === 'analytics' && <AnalyticsPage />}
            {activeTab === 'settings' && <SettingsPage />}
            {activeTab === 'help' && <HelpCenter />}
            {activeTab === 'posts' && <InvestorBusinessPosts />}

          </>
        )}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
