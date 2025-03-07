const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride'); // Make sure this path is correct
const auth = require('../middleware/auth'); // Assuming you have an auth middleware

// Book a ride
router.post('/book', auth, async (req, res) => {
  try {
    const { pickup, destination, vehicleType, price } = req.body;
    const newRide = new Ride({
      userId: req.user.id,
      pickup,
      destination,
      vehicleType,
      price
    });
    const savedRide = await newRide.save();
    res.json(savedRide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get ride history
router.get('/history', auth, async (req, res) => {
  try {
    console.log('Fetching ride history for user:', req.user.id);
    const rides = await Ride.find({ userId: req.user.id }).sort({ date: -1 });
    console.log('Rides found:', rides);
    res.json(rides);
  } catch (err) {
    console.error('Error fetching ride history:', err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
