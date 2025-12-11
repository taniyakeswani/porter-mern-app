const express = require('express');
const {
  createRequest,
  getCustomerRequests,
  getAllRequests,
  updateRequestStatus,
} = require('../controllers/requestController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Customer routes
router.post('/', protect, createRequest);
router.get('/my-requests', protect, getCustomerRequests);

// Admin routes
router.get('/all', protect, admin, getAllRequests);
router.put('/:id/status', protect, admin, updateRequestStatus);

module.exports = router;