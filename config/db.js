const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
require('dotenv').config();


const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Successfully Connected...`);
  } catch(err) {
    console.log(`MongoDB Connection Error: ${err.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;