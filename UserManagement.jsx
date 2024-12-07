import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Typography,
  Box,
  Chip,
} from '@mui/material';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'John Smith', role: 'Investor', status: 'Active', email: 'john@example.com' },
    { id: 2, name: 'Sarah Wilson', role: 'Business', status: 'Pending', email: 'sarah@example.com' },
    { id: 3, name: 'Michael Brown', role: 'Admin', status: 'Active', email: 'michael@example.com' },
    { id: 4, name: 'Emma Davis', role: 'Investor', status: 'Inactive', email: 'emma@example.com' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Inactive':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">User Management</Typography>
        <Button variant="contained" color="primary">
          Add User
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Chip label={user.status} color={getStatusColor(user.status)} size="small" />
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton color="error">
                      <Trash2 />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;
