const mongoose = require('mongoose');

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
    registrationStatus: {
      type: String,
      enum: ["Approved", "Rejected", "Waiting"],
      default: "Waiting",
    },
    metrics: {
      profileViews: { type: Number, default: 0 },
      postEngagement: { type: Number, default: 0 },
    },
  },
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // Assuming businesses are stored in the User collection with the role "Business"
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
