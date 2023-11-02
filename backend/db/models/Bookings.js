const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  cabType: {
    type: String,
    required: true
  },
  bookedFrom: {
    type: Date, // Store the timestamp for booking time
    required: true
  },
  bookedTill: {
    type: Date, // Store the timestamp for the end of the booking
    required: true
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;