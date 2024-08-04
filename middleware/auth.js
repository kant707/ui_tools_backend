const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/Users');

// Because [  module.exports = function(req, res, next)  ] it's middleware function
// and it's take three params @req, @res, @next
// middleware function has access to @req, @res and after it's done.
// And @next is callback function to move on next peice of code.

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }


  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    let user = await User.findById(decoded.user.id);
    if(token !== user.token) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }
    
    // NOTE: Below Commented code is for jwt verification.
    // const decoded = jwt.verify(token, config.get('jwtSecret'));
    // req.user = decoded.user;

    let userid = {id: user.id};
    req.user = userid;
    next();
  } catch(err) {
    console.log('AUTH_MIDDLEWARE_CATCH_ERROR:', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};