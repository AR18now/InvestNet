const Connection = require('../models/connections');
const User = require('../models/User');
const mongoose = require('mongoose');

// Send a connection request
const sendConnectionRequest = async (req, res) => {
  try {
    const { recipientId } = req.body; // The business the investor wants to connect with
    const requesterId = req.user._id; // The logged-in investor

    // Check if the user is trying to connect to themselves
    if (requesterId.toString() === recipientId.toString()) {
      return res.status(400).json({ message: "You cannot connect to yourself" });
    }

    // Check if the connection request already exists
    const existingConnection = await Connection.findOne({
      requesterId,
      recipientId,
    });
    if (existingConnection) {
      return res.status(400).json({ message: "Connection request already sent" });
    }

    // Create a new connection request
    const newConnection = new Connection({
      requesterId,
      recipientId,
      status: 'Pending',
    });

    await newConnection.save();
    res.status(201).json({ message: "Connection request sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error sending connection request", error: err.message });
  }
};

// Accept a connection request
const acceptConnectionRequest = async (req, res) => {
  try {
    const { connectionId } = req.body; // Connection request ID
    const businessId = req.user._id; // The logged-in business

    const connection = await Connection.findById(connectionId);
    if (!connection) {
      return res.status(404).json({ message: "Connection request not found" });
    }

    // Check if the recipient is the business
    if (connection.recipientId.toString() !== businessId.toString()) {
      return res.status(400).json({ message: "You are not the recipient of this request" });
    }

    // Update the status to 'Accepted'
    connection.status = 'Accepted';
    connection.updatedAt = Date.now();
    await connection.save();

    // Optionally, you could send a notification to the requester
    res.status(200).json({ message: "Connection request accepted" });
  } catch (err) {
    res.status(500).json({ message: "Error accepting connection request", error: err.message });
  }
};

// Reject a connection request
const rejectConnectionRequest = async (req, res) => {
  try {
    const { connectionId } = req.body;
    const businessId = req.user._id;

    const connection = await Connection.findById(connectionId);
    if (!connection) {
      return res.status(404).json({ message: "Connection request not found" });
    }

    if (connection.recipientId.toString() !== businessId.toString()) {
      return res.status(400).json({ message: "You are not the recipient of this request" });
    }

    // Update the status to 'Rejected'
    connection.status = 'Rejected';
    connection.updatedAt = Date.now();
    await connection.save();

    res.status(200).json({ message: "Connection request rejected" });
  } catch (err) {
    res.status(500).json({ message: "Error rejecting connection request", error: err.message });
  }
};

// Start a private chat between two users
const startPrivateChat = async (req, res) => {
  try {
    const { recipientId, message } = req.body; // Message content and recipient
    const senderId = req.user._id; // The logged-in user

    // Check if a connection exists between the two users
    const connection = await Connection.findOne({
      requesterId: senderId,
      recipientId,
      status: 'Accepted',
    });

    if (!connection) {
      return res.status(400).json({ message: "No active connection to start a chat" });
    }

    // Create the chat message
    const chat = {
      chatId: new mongoose.Types.ObjectId(),
      participants: [senderId, recipientId],
      lastMessage: { content: message, timestamp: Date.now() },
      createdAt: Date.now(),
    };

    const user = await User.findById(senderId);
    user.chats.push(chat);
    await user.save();

    res.status(200).json({ message: "Private chat started", chat });
  } catch (err) {
    res.status(500).json({ message: "Error starting private chat", error: err.message });
  }
};

// Schedule a meeting via Google Meet (Google API integration required)
const scheduleMeeting = async (req, res) => {
  try {
    const { startTime, endTime, title, description } = req.body;
    const userId = req.user._id;

    // Assuming OAuth2 authentication for Google API
    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2Client.setCredentials({ access_token: req.user.googleAccessToken });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const event = {
      summary: title,
      description: description,
      start: {
        dateTime: startTime,
        timeZone: 'UTC',
      },
      end: {
        dateTime: endTime,
        timeZone: 'UTC',
      },
      conferenceData: {
        createRequest: {
          requestId: "sample123",
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      attendees: [
        { email: 'user1@example.com' }, // attendee emails
        { email: 'user2@example.com' },
      ],
    };

    const result = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
    });

    res.status(200).json({ message: "Meeting scheduled", meetingLink: result.data.hangoutLink });
  } catch (err) {
    res.status(500).json({ message: "Error scheduling meeting", error: err.message });
  }
};

module.exports = {
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  startPrivateChat,
  scheduleMeeting,
};
