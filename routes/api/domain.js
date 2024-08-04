const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Domain =  require('../../models/Domain');


// @route           POST api/domain
// @description     Save Domain
// @access          Private

router.post('/', [
  auth,
  check('domainName', 'Domain name is required').not().isEmpty(),
  check('email', 'User email is required').not().isEmpty(),
  check('role', 'User role is required').not().isEmpty(),

], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { domainName, email, role } = req.body;
  try {
    // See if domain exists
    let domain = await Domain.findOne({ domainName });
    if(domain) {
      return res.status(400).json({ errors: [ { msg: 'Domain name already exists' } ] });
    }

    domain = new Domain({
      domainName,
      email,
      role
    });
    await domain.save();
    res.send(`Domain name created`);

  } catch(err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }

  // console.log(req.body);
});


// @route           PATCH api/domain/:id
// @description     UPDATE Domain name
// @access          Private

router.patch('/:id', [
  check('domainName', 'Domain name is required').not().isEmpty(),
],
auth, async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const domainId = req.params.id;
    const reqBody = req.body;
    await Domain.findByIdAndUpdate(domainId, reqBody, { new: true });

    res.status(200).json({ msg: 'Domain name updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});


// @route           GET api/domain
// @description     Saved Domains
// @access          Private

router.get('/', auth, async (req, res) => {
  try {
    const domains = await Domain.find();
    res.status(200).send(domains);
  } catch(err) {
    res.status(500).send(`Server error ${err.message}`);
  }
});


// @route           DELETE api/domain/:id
// @description     Delete domain
// @access          Private

/*
// Commented block for future use.
router.delete('/:id', auth, async (req, res) => {
  try {
    const domain = await Domain.findById(req.params.id);
    // check if not exist
    if(!domain) {
      return res.json({ msg: 'Domain name not found' });
    }

    domain.remove();
    res.status(200).json({ msg: 'Domain removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});

*/

module.exports = router;