const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const TemplateType = require('../../models/TemplateType');

// @route           POST api/template-type
// @description     Save template-type
// @access          Private

router.post('/', [
  auth,
  check('templateTypeName', 'Template type is required').not().isEmpty(),
  check('email', 'User email is required').not().isEmpty(),
  check('role', 'User role is required').not().isEmpty(),

], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { templateTypeName, email, role } = req.body;
  try {
    // See if template-type exists
    let templateType = await TemplateType.findOne({ templateTypeName });
    if(templateType) {
      return res.status(400).json({ errors: [ { msg: 'Template type already exists' } ] });
    }

    templateType = new TemplateType({
      templateTypeName,
      email,
      role
    });
    await templateType.save();
    res.send(`Template type created`);

  } catch(err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }

  // console.log(req.body);
});


// @route           PATCH api/template-type/:id
// @description     UPDATE Template type
// @access          Private

router.patch('/:id', [
  check('templateTypeName', 'Template Type is required').not().isEmpty(),
],
auth, async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const templateTypeId = req.params.id;
    const reqBody = req.body;
    await TemplateType.findByIdAndUpdate(templateTypeId, reqBody, { new: true });

    res.status(200).json({ msg: 'Template type updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});


// @route           GET api/template-type
// @description     Saved template-types
// @access          Private

router.get('/', auth, async (req, res) => {
  try {
    const templateTypes = await TemplateType.find();
    res.status(200).send(templateTypes);
  } catch(err) {
    res.status(500).send(`Server error ${err.message}`);
  }
});


// @route           DELETE api/template-type/:id
// @description     Delete template-type
// @access          Private

/*
// Commented block for future use.
router.delete('/:id', auth, async (req, res) => {
  try {
    const templateType = await TemplateType.findById(req.params.id);
    // check if not exist
    if(!templateType) {
      return res.json({ msg: 'Template type not found' });
    }

    templateType.remove();
    res.status(200).json({ msg: 'Template type removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }
});

*/

module.exports = router;