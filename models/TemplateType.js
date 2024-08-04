const mongoose = require('mongoose');

const TemplateTypeSchema = new mongoose.Schema({
  templateTypeName: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
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

module.exports = TemplateType = mongoose.model('templateType', TemplateTypeSchema);
