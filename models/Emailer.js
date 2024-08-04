const mongoose = require('mongoose');

const EmailerSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
  },
  templateType: {
    type: String,
    required: true,
  },
  templateName: {
    type: String,
    required: true,
    unique: true,
  },
  templateExtension: {
    type: String,
    required: true,    
  },
  templateContent: {
    type: String,
    required: true,    
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

module.exports = Emailer = mongoose.model('emailer', EmailerSchema);