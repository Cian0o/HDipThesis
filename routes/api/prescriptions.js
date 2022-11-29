const express = require('express');
const router = express.Router();

// route is: GET api/prescriptions
// Description: Test Route
// Access: Public
router.get('/', (req, res) => res.send('Prescriptions Route'));

module.exports = router;