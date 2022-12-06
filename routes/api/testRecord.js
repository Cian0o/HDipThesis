const express = require('express');
const router = express.Router();
const  {check, validationResult} = require('express-validator');

// route is: GET api/prescriptions
// Description: Test Form Post Route
// Access: Public
router.post('/', [
        check('Field0', 'Field0 should contain a number').isNumeric().not().isEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body);
    res.send('Test Record Post Route');

});

module.exports = router;