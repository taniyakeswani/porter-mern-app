const Request = require('../models/Request');

// Create a new request
const createRequest = async (req, res) => {
  try {
    const { pickupAddress, dropAddress, weight, notes } = req.body;

    const request = await Request.create({
      customer: req.user._id,
      pickupAddress,
      dropAddress,
      weight,
      notes,
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all requests for a customer
const getCustomerRequests = async (req, res) => {
  try {
    const requests = await Request.find({ customer: req.user._id }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all requests (Admin only)
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('customer', 'name email phone').sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update request status (Admin only)
const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = status;
    const updatedRequest = await request.save();

    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRequest,
  getCustomerRequests,
  getAllRequests,
  updateRequestStatus,
};