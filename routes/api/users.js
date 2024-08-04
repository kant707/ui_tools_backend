const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/Users');


// @route           POST api/users
// @description     Register user
// @access          Public
router.post('/', [  
  check('email', 'Please include a valid message').isEmail(),
  check('role', 'Role is required').not().isEmpty(),
], 
async (req, res) => {
  const errors = validationResult(req);
  // console.log(req.body);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { role, email } = req.body;
  try {
  // See if user exists
  let user = await User.findOne({ email });
  if(user) {
    return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
  }

  user = new User({
    role,
    email,
    token: '',
  });

  await user.save(); // it will return promosie
  res.send(`User Successfully registered`);

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// @route           PATCH api/users/:id
// @description     UPDATE User role
// @access          Public
router.patch('/:id', [
  check('role', 'Role is required').not().isEmpty(),
],
auth, async (req, res) => {
  const errors = validationResult(req);
    
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const userId = req.params.id;
    const reqBody = req.body;
    await User.findByIdAndUpdate(userId, reqBody, { new: true });

    res.status(200).json({ msg: 'User role updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});


// @route           GET api/users
// @description     Get all users
// @access          Public
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find().select('-token');
    res.status(200).send(users);
  } catch(err) {
    res.status(500).send(`Server error ${err.message}`);
  }
});


// @route           DELETE api/users/:id
// @description     Delete user
// @access          Public
router.delete('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // check if not exist
    if(!user) {
      return res.json({ msg: 'User not found' });
    }
    
    user.remove();
    res.status(200).json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});

module.exports = router;