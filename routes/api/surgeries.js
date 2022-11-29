const express = require('express');
const router = express.Router();

// route is: GET api/surgeries
// Description: Test Route
// Access: Public
router.get('/', (req, res) => res.send('Surgeries Route'));

module.exports = router;