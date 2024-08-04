const mongoose =  require('mongoose');

const DomainSchema = new mongoose.Schema({
  domainName: {
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

module.exports = Domain = mongoose.model('domain', DomainSchema);