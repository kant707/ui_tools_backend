const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


const User = require('../../models/Users');

// @route           GET api/auth
// @description     Test route
// @access          Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  // res.send(`Auth route`)
});


// @route           POST api/auth
// @description     Authenticate user and get token
// @access          Public
router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
], 
async (req, res) => {
  const errors = validationResult(req);
  // console.log(req.body);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({ errors: [ { msg: 'Email is not register' } ] });
    }

    // // Preparing for user token
    // user = new User({
    //   role,
    //   email,
    //   token: '',
    // });
    
    // await user.save(); // it will return promosie

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
        role: user.role, // This user id is getting after user.save() promise
      }
    }

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 36000 },
      async (err, token) => {
        if(err) throw err;
        user.token = token; // Assining real token to user 
        await user.save(); // Saving token before sending into response
        res.json({ role:user.role, token });
      }
    );
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;