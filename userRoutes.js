const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
} = require("../controllers/userController");

const router = express.Router();

// Route for creating a new user
router.post("/", createUser);

// Route to get all users
router.get("/", getAllUsers);

// Route to get a single user by ID
router.get("/:id", getUserById);

// Route to update a user by ID
router.put("/:id", updateUser);

// Route to delete a user by ID
router.delete("/:id", deleteUser);

// Route to search and filter users
router.post("/search", searchUsers);

module.exports = router;
