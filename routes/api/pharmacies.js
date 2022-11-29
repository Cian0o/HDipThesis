const express = require('express');
const router = express.Router();

// route is: GET api/pharmacies
// Description: Test Route
// Access: Public
router.get('/', (req, res) => res.send('Pharmacies Route'));

module.exports = router;