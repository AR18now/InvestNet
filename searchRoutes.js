const express = require('express');
const {
  searchBusinesses,
  addBookmark,
  removeBookmark,
  getBookmarks,
} = require('../controllers/searchController');

const router = express.Router();

// Route to search businesses with filters
router.post('/search', searchBusinesses);

// Route to bookmark a business
router.post('/bookmark', addBookmark);

// Route to remove a business from bookmarks
router.delete('/bookmark', removeBookmark);

// Route to get all bookmarked businesses for a user
router.get('/bookmarks/:userId', getBookmarks);

module.exports = router;
