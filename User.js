const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "Investor", "Business", "General User"], required: true },
  registrationDate: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: null },
  profile: {
    bio: { type: String, default: "" },
    preferences: {
      industries: [{ type: String }],
      locations: [{ type: String }],
      fundingRange: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 },
      },
    },
    documents: [{ type: String }], // URLs
    registrationStatus: { type: String, enum: ["Approved", "Rejected", "Waiting"], default: "Waiting" },
    metrics: {
      profileViews: { type: Number, default: 0 },
      postEngagement: { type: Number, default: 0 },
    },
  },
  chats: [
    {
      chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
      participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      lastMessage: {
        content: { type: String },
        timestamp: { type: Date },
      },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  notifications: [
    {
      message: { type: String },
      timestamp: { type: Date, default: Date.now },
      isRead: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
