const express = require('express');
const {check, validationResult} = require("express-validator");
const router = express.Router();

// route is: GET api/pharmacies
// Description: Test Route
// Access: Public
router.post('/', [
        check('PSIN', 'Please Enter a valid PSI Number').isNumeric().not().isEmpty()
        , check('PharmaEmail', 'Please Enter an Email').isEmail().not().isEmpty(),
        check('PharmaPassword', 'Password Should Contain at  least  8 characters').isLength({min: 8})],
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);
        res.send('Test Record Post Route');

    });

module.exports = router;