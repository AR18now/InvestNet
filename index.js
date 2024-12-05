const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const connectionRoutes = require('./routes/connectionRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const searchRoutes = require('./routes/searchRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/investnet")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use('/api/connections', connectionRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/search', searchRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
