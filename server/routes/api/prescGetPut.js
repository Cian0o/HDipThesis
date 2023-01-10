const express = require('express');
const pharmaauthMware = require('../../middleware/pharmaauthMware')
const {check, validationResult} = require("express-validator");
const Prescription = require("../../models/Prescription");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');

// route is: GET api/docauth
// Description: Test Route
// Access: Public
router.get('/', pharmaauthMware, async (req, res) => {
    try{
        const prescription = await Prescription.findById(req.prescription.id);
        res.json(prescription);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;