const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


const Emailer = require('../../models/Emailer');

// @route           POST api/emailer
// @description     Save emailer
// @access          Public

router.post('/', [
  auth,
  check('domain', 'Domain is required').not().isEmpty(),
  check('templateType', 'Template type is required').not().isEmpty(),
  check('templateName', 'Template name is required').not().isEmpty(),
  check('templateContent', 'Template should not empty').not().isEmpty(),
  check('user', 'User name is required').not().isEmpty(),
  check('email', 'User email is required').not().isEmpty(),
  check('role', 'User role is required').not().isEmpty(),

], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { domain, templateType, templateName, templateExtension, templateContent, user, email, role } = req.body;
  try {
    const emailer = new Emailer({
      domain,
      templateType,
      templateName,
      templateExtension,
      templateContent,
      user,
      email,
      role
    });
    await emailer.save();
    res.send(`Template created`);
  } catch(err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }

  // console.log(req.body);
});

// @route           GET api/emailer
// @description     Saved emailers
// @access          Public

router.get('/', auth, async (req, res) => {
  try {
    const emailers = await Emailer.find();
    res.status(200).send(emailers);
  } catch(err) {
    res.status(500).send(`Server error ${err.message}`);
  }
});

// @route           DELETE api/emailer/:id
// @description     Delete emailer
// @access          Public
router.delete('/:id', auth, async (req, res) => {
  try {
    const emailer = await Emailer.findById(req.params.id);
    // check if not exist
    if(!emailer) {
      return res.json({ msg: 'Template not found' });
    }
    
    emailer.remove();
    res.status(200).json({ msg: 'Template removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});

module.exports = router;