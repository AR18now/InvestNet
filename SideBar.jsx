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
import PostAdd from '@mui/icons-material/PostAdd';

import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  Divider, 
  Box 
} from '@mui/material';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { icon: <Users />, label: 'User Management', id: 'users' },
    { icon: <FileCheck />, label: 'Business Verification', id: 'verification' },
    { icon: <Flag />, label: 'Flagged Content', id: 'flagged' },
    { icon: <BarChart2 />, label: 'Analytics', id: 'analytics' },
    { icon: <Settings />, label: 'Settings', id: 'settings' },
    { icon: <HelpCircle />, label: 'Help Center', id: 'help' },
    { icon: <PostAdd />, label: 'Investors and Businesses posts', id: 'posts' },
  ];

  const drawerWidth = 240;

  // Drawer content (shared by both mobile and desktop views)
  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Sidebar Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Admin Panel</h1>
        <IconButton onClick={() => setIsMobileOpen(false)}>
          <X />
        </IconButton>
      </Box>

      <Divider />

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false); // Close the drawer after clicking
              }}
              selected={activeTab === item.id}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* Footer */}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogOut />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Show only on mobile
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Persistent Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' }, // Show only on larger screens
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
