const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, //email is a string data type
  },
  message: {
    type: String,
    required: true,
  },
});

const feedbackModel = mongoose.model('feedback', feedbackSchema);
module.exports = feedbackModel;
