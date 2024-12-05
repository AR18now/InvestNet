const User = require('../models/User');

// Advanced Search: Search for businesses based on filters
const searchBusinesses = async (req, res) => {
  try {
    const { industries, locations, fundingRange, name } = req.body;
    const query = { role: "Business" };  // Only search for businesses

    if (industries && industries.length) query["profile.preferences.industries"] = { $in: industries };
    if (locations && locations.length) query["profile.preferences.locations"] = { $in: locations };
    if (fundingRange) {
      query["profile.preferences.fundingRange"] = {
        $gte: fundingRange.min,
        $lte: fundingRange.max,
      };
    }
    if (name) query.name = { $regex: name, $options: "i" };  // Case-insensitive search by name

    // Find businesses that match the search criteria
    const businesses = await User.find(query, "-password -bookmarks");

    if (businesses.length === 0) {
      return res.status(404).json({ message: "No businesses found matching the criteria." });
    }

    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error searching businesses", error: err.message });
  }
};

// Add a business to bookmarks
const addBookmark = async (req, res) => {
  try {
    const { userId, businessId } = req.body;  // User ID and Business ID

    // Find the user who wants to bookmark
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    // Check if business is already bookmarked
    if (user.bookmarks.includes(businessId)) {
      return res.status(400).json({ message: "Business already bookmarked." });
    }

    // Add the business to bookmarks
    user.bookmarks.push(businessId);
    await user.save();

    res.status(200).json({ message: "Business bookmarked successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error bookmarking business", error: err.message });
  }
};

// Remove a business from bookmarks
const removeBookmark = async (req, res) => {
  try {
    const { userId, businessId } = req.body;

    // Find the user and remove the business from bookmarks
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.bookmarks = user.bookmarks.filter(id => id.toString() !== businessId);
    await user.save();

    res.status(200).json({ message: "Business removed from bookmarks." });
  } catch (err) {
    res.status(500).json({ message: "Error removing bookmark", error: err.message });
  }
};

// Get all bookmarked businesses for a user
const getBookmarks = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user and populate the bookmarks
    const user = await User.findById(userId).populate('bookmarks', 'name profile');
    if (!user) return res.status(404).json({ message: "User not found." });

    res.status(200).json(user.bookmarks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookmarks", error: err.message });
  }
};

module.exports = {
  searchBusinesses,
  addBookmark,
  removeBookmark,
  getBookmarks,
};
