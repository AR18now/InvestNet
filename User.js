const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Admin", "Investor", "Business", "General User"],
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  profile: {
    bio: String,
    preferences: {
      industries: [String],
      locations: [String],
      fundingRange: {
        min: Number,
        max: Number,
      },
    },
    documents: [String],
    registrationStatus: {
      type: String,
      enum: ["Approved", "Rejected", "Waiting"],
      default: "Waiting",
    },
    metrics: {
      profileViews: {
        type: Number,
        default: 0,
      },
      postEngagement: {
        type: Number,
        default: 0,
      },
    },
  },
  chats: [
    {
      chatId: mongoose.Schema.Types.ObjectId,
      participants: [mongoose.Schema.Types.ObjectId],
      lastMessage: {
        content: String,
        timestamp: Date,
      },
      createdAt: Date,
    },
  ],
  notifications: [
    {
      message: String,
      timestamp: Date,
      isRead: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
