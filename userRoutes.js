const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers); // Get all users
router.get("/:id", getUserById); // Get a single user by ID
router.put("/:id", updateUser); // Update a user
router.delete("/:id", deleteUser); // Delete a user
router.post("/search", searchUsers); // Search and filter users

module.exports = router;
