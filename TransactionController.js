const Transaction = require('../models/Transaction');

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { senderId, receiverId, amount, paymentMethod, dealDetails } = req.body;

    // Validate the input (simple validation)
    if (!senderId || !receiverId || !amount || !paymentMethod || !dealDetails) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new transaction
    const newTransaction = new Transaction({
      senderId,
      receiverId,
      amount,
      paymentMethod,
      dealDetails,
    });

    // Save the transaction
    await newTransaction.save();

    // Return the response
    res.status(201).json({
      message: 'Transaction created successfully',
      transaction: newTransaction,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update the status of a transaction (e.g., mark as completed or failed)
const updateTransactionStatus = async (req, res) => {
  try {
    const { transactionId, status } = req.body;

    // Validate the input
    if (!transactionId || !status || !['Pending', 'Completed', 'Failed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid transaction ID or status' });
    }

    // Update the transaction status
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      { status },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json({
      message: 'Transaction status updated',
      transaction: updatedTransaction,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a list of all transactions for a user (either sender or receiver)
const getUserTransactions = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find transactions for the user (either as sender or receiver)
    const transactions = await Transaction.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });

    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a transaction by its ID
const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  createTransaction,
  updateTransactionStatus,
  getUserTransactions,
  getTransactionById,
};
