const express = require('express');
const docauth = require('../../middleware/docauth')
const router = express.Router();

// route is: GET api/docauth
// Description: Test Route
// Access: Public
router.get('/', docauth, (req, res) => res.send('DocAuth Route'));

module.exports = router;