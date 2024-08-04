const express = require('express');
const config = require('config');
const emailConnect = config.get('emailConnectSecret');

const mailchimpFactory = require("@mailchimp/mailchimp_transactional/src/index.js");
const mailchimpClient = mailchimpFactory(emailConnect);
// const mailchimpClient = mailchimpFactory("f4570d0c4dabc70f238067602305de72-us20");
// const mailchimpClient = require("mailchimp_transactional")("f4570d0c4dabc70f238067602305de72-us20");
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const emailTemplate = require('../../models/TestEmailTemplate');



// @route           POST api/template-type
// @description     Save template-type
// @access          Private

router.post('/', async (req, res) => {
  async function run() {
    // const response = await mailchimpClient.messages.sendTemplate({
    //   template_name: "template_name",
    //   template_content: [{}],
    //   message: {
    //     text: 'Hello Buddy!',
    //     subject: 'Testmail from Mailchimp',
    //     from_email: 'shashi.kant@nykaa.com',
    //     from_name: 'Shashikant',
    //     to: ['kant707@gmail.com','shashi.kant@nykaa.com']
    //   },
    // });
    // console.log(response);
    const response = await mailchimpClient.messages.send({ message: {
      template_name: "template_name",
      template_content: [{}],
      html: emailTemplate,
      inline_css: true,
      global_merge_vars: [
        {
          name: "fname",
          content: "John"
        },
        {
          name: "lname",
          content: "Smith"
        }
      ],
      merge_vars: [
        {
          rcpt: "shashi.kant@nykaa.com",
          vars: [
              {
                name: "fname",
                content: "Bhole"
              },
              {
                name: "lname",
                content: "Baba"
              }
          ]
        }
      ],
      subject: 'Testmail from Mailchimp',
      from_email: 'shashi.kant@nykaa.com',
      from_name: 'Shashikant',
      to: [
        {
          email: 'shashi.kant@nykaa.com',
          name: 'shashikant',
        },
        {
          email: 'rs.yadav@nykaa.com',
          name: 'Radheshyam Yadav',
        },
        {
          email: 'bhakti.dusankar@nykaa.com',
          name: 'Bhakti',
        }
      ]
    } });
    console.log(response);
    res.send(response);
  }

  run();







router.get('/', (req, res) => {
  console.log('Before function');
  try {
    async function run() {
      const response = await mailchimpClient.users.ping();
      // console.log(response);
      res.send(response);
    }
    console.log('After function');
    // res.send(`Posts route`);
    run();
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${err.message}`);
  }

});





  // const errors = validationResult(req);
  // if(!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  // const { templateTypeName, email, role } = req.body;
  // try {
  //   // See if template-type exists
  //   let templateType = await TemplateType.findOne({ templateTypeName });
  //   if(templateType) {
  //     return res.status(400).json({ errors: [ { msg: 'Template type already exists' } ] });
  //   }

  //   templateType = new TemplateType({
  //     templateTypeName,
  //     email,
  //     role
  //   });
  //   await templateType.save();
  //   res.send(`Template type created`);

  // } catch(err) {
  //   console.error(err.message);
  //   res.status(500).send(`Server error ${err.message}`);
  // }

  // // console.log(req.body);
});

module.exports = router;

