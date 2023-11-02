const mongoose = require('mongoose');

const cabSchema = new mongoose.Schema({
  cabName: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  nextFreeTime: {
    type: Date, // Store the timestamp for when the cab will be free next
    required: true
  }
});

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;