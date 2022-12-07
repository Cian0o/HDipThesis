const express = require('express');
const pharmaauth = require('../../middleware/pharmaauth')
const router = express.Router();

// route is: GET api/docauth
// Description: Test Route
// Access: Public
router.get('/', pharmaauth, (req, res) => res.send('Pharma Authd!'));

module.exports = router;