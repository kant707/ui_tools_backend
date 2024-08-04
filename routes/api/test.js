const express = require('express');
const router = express.Router();

function tx() {
  console.log(`Router ${router}`);
};

tx();