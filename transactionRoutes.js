const express = require('express');
const {
  createTransaction,
  updateTransactionStatus,
  getUserTransactions,
  getTransactionById,
} = require('../controllers/TransactionController');

const router = express.Router();

// Create a new transaction (POST)
router.post('/create', createTransaction);

// Update transaction status (PUT)
router.put('/update-status', updateTransactionStatus);

// Get all transactions for a user (GET)
router.get('/user/:userId', getUserTransactions);

// Get a transaction by ID (GET)
router.get('/:transactionId', getTransactionById);

module.exports = router;
