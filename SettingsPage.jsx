import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardContent,
  Switch,
} from '@mui/material';
import { Save, User, Lock, Bell } from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Profile Settings */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <User style={{ marginRight: 8 }} />
            Profile Settings
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                placeholder="John Doe"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                placeholder="john@example.com"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Lock style={{ marginRight: 8 }} />
            Security
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="subtitle1">Two-Factor Authentication</Typography>
              <Typography variant="body2" color="textSecondary">
                Add an extra layer of security
              </Typography>
            </Box>
            <Switch
              checked={twoFactorAuth}
              onChange={(e) => setTwoFactorAuth(e.target.checked)}
            />
          </Box>
          <Button variant="text" color="primary">
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Bell style={{ marginRight: 8 }} />
            Notifications
          </Typography>

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="subtitle1">Push Notifications</Typography>
              <Typography variant="body2" color="textSecondary">
                Receive notifications about important updates
              </Typography>
            </Box>
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="subtitle1">Marketing Emails</Typography>
              <Typography variant="body2" color="textSecondary">
                Receive emails about new features and updates
              </Typography>
            </Box>
            <Switch
              checked={marketingEmails}
              onChange={(e) => setMarketingEmails(e.target.checked)}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Save />}
          sx={{ px: 4, py: 1.5 }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;
