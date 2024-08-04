const express = require('express');
const router = express.Router();

// @route           GET api/alive
// @description     Check server is alive or not
// @access          Public

router.get('/', async (req, res)=>{ 
  try {
    return res.status(200).send('server alive');
  } catch (err) {
    console.error(`Alive server error: ${err.message}`);
    res.status(500).send('Server error');
  }
});

module.exports = router;