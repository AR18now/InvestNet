const express = require('express');
const { 
  sendConnectionRequest, 
  acceptConnectionRequest, 
  rejectConnectionRequest, 
  startPrivateChat, 
  scheduleMeeting 
} = require('../controllers/connectionController');

const router = express.Router();

// Route to send a connection request
router.post('/send-request', sendConnectionRequest);

// Route to accept a connection request
router.put('/accept', acceptConnectionRequest);

// Route to reject a connection request
router.put('/reject', rejectConnectionRequest);

// Route to start a private chat
router.post('/start-chat', startPrivateChat);

// Route to schedule a meeting
router.post('/schedule-meeting', scheduleMeeting);

module.exports = router;
