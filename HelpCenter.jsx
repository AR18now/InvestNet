import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Button,
  Divider,
} from '@mui/material';
import { Search, ChevronDown, ChevronUp, MessageSquare, FileText, PhoneCall } from 'lucide-react';

const HelpCenter = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqs = [
    {
      question: "How do I verify a business?",
      answer: "To verify a business, navigate to the Business Verification tab and follow these steps: 1) Upload required documents 2) Fill in business details 3) Submit for review. Our team typically processes verifications within 24-48 hours."
    },
    {
      question: "How do I manage user permissions?",
      answer: "User permissions can be managed from the User Management section. Select a user, click on 'Edit Permissions', and adjust their role and access levels as needed. Don't forget to save your changes."
    },
    {
      question: "What do I do about flagged content?",
      answer: "When content is flagged, review it in the Flagged Content section. You can either approve the content if it meets our guidelines or remove it if it violates our policies. Always document your decision."
    }
  ];

  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Help Center
      </Typography>

      {/* Search Section */}
      <Box sx={{ mb: 6 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search for help..."
          InputProps={{
            startAdornment: (
              <Search style={{ marginLeft: 8, marginRight: 8 }} />
            ),
          }}
          sx={{ backgroundColor: 'white' }}
        />
      </Box>

      {/* Quick Actions */}
      <Grid container spacing={4} sx={{ mb: 6 }} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
            <MessageSquare sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Chat Support
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Get help from our team
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
            <FileText sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Documentation
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Browse our guides
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
            <PhoneCall sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Phone Support
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Call our support team
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* FAQs Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Card
            key={index}
            sx={{
              mb: 2,
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Typography variant="h6">{faq.question}</Typography>
                <IconButton
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                >
                  {openSection === index ? (
                    <ChevronUp sx={{ fontSize: 24 }} />
                  ) : (
                    <ChevronDown sx={{ fontSize: 24 }} />
                  )}
                </IconButton>
              </Box>
              <Collapse in={openSection === index} timeout="auto" unmountOnExit>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    {faq.answer}
                  </Typography>
                </Box>
              </Collapse>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Contact Information */}
      <Card sx={{ p: 4, boxShadow: 2 }}>
        <Typography variant="h5" gutterBottom>
          Still Need Help?
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          Our support team is available 24/7 to help you with any questions or issues.
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" color="primary">
            <MessageSquare sx={{ fontSize: 18, verticalAlign: 'middle', mr: 1 }} />
            support@investnet.com
          </Typography>
          <Typography variant="body2" color="primary">
            <PhoneCall sx={{ fontSize: 18, verticalAlign: 'middle', mr: 1 }} />
            +1 (555) 123-4567
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default HelpCenter;
