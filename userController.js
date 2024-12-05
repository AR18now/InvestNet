const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Create a user
const createUser = async (req, res) => {
  try {
    const { name, email, password, role, profile } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profile,
    });

    // Save the user to the database
    await newUser.save();

    // Send a response
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password field
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const updates = req.body;

    // Prevent updating password directly
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10); // Hash new password
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
};

// Search and filter users
const searchUsers = async (req, res) => {
  try {
    const { role, registrationStatus, name } = req.body;
    const query = {};

    if (role) query.role = role;
    if (registrationStatus) query["profile.registrationStatus"] = registrationStatus;
    if (name) query.name = { $regex: name, $options: "i" }; // Case-insensitive search

    const users = await User.find(query, "-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error searching users", error: err.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
};
