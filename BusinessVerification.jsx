import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Select, MenuItem, IconButton } from '@mui/material';
import { Check, X, Clock, AlertCircle } from 'lucide-react';

const BusinessVerification = () => {
  const verificationRequests = [
    {
      id: 1,
      businessName: "Tech Solutions Inc",
      registrationDate: "2024-03-15",
      documentType: "Business License",
      status: "Approved",
      submittedBy: "james@techsolutions.com"
    },
    {
      id: 2,
      businessName: "Green Energy Co",
      registrationDate: "2024-03-18",
      documentType: "Tax Certificate",
      status: "Waiting",
      submittedBy: "contact@greenenergy.com"
    },
    {
      id: 3,
      businessName: "Local Cafe Chain",
      registrationDate: "2024-03-17",
      documentType: "Health Permit",
      status: "Rejected",
      submittedBy: "admin@localcafe.com"
    },
    {
      id: 4,
      businessName: "Global Traders Ltd",
      registrationDate: "2024-03-19",
      documentType: "Import License",
      status: "Waiting",
      submittedBy: "info@globaltraders.com"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <Check style={{ color: 'green', fontSize: 18 }} />;
      case 'Rejected':
        return <X style={{ color: 'red', fontSize: 18 }} />;
      case 'Waiting':
        return <Clock style={{ color: 'orange', fontSize: 18 }} />;
      default:
        return <AlertCircle style={{ fontSize: 18 }} />;
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Business Verification</Typography>
        <Select defaultValue="all" sx={{ width: 200 }}>
          <MenuItem value="all">All Status</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
          <MenuItem value="waiting">Waiting</MenuItem>
        </Select>
      </Box>

      <TableContainer sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Business Name</strong></TableCell>
              <TableCell><strong>Registration Date</strong></TableCell>
              <TableCell><strong>Document Type</strong></TableCell>
              <TableCell><strong>Submitted By</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {verificationRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.businessName}</TableCell>
                <TableCell>{request.registrationDate}</TableCell>
                <TableCell>{request.documentType}</TableCell>
                <TableCell>{request.submittedBy}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getStatusIcon(request.status)}
                    <Typography sx={{ ml: 1 }}>{request.status}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="contained" size="small">View Details</Button>
                    {request.status === 'Waiting' && (
                      <>
                        <Button variant="contained" color="success" size="small">Approve</Button>
                        <Button variant="contained" color="error" size="small">Reject</Button>
                      </>
                    )}
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

export default BusinessVerification;
