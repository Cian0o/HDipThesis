const express = require('express');
const pharmaauthMware = require('../../middleware/pharmaauthMware')
const {check, validationResult} = require("express-validator");
const Pharmacy = require("../../models/Pharmacy");
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
        const pharmacy = await Pharmacy.findById(req.pharmacy.id).select('-password');
        res.json(pharmacy);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/login/federated/google', passport.authenticate('google'));

//Route: POST to api/auth
//Authenticates users and gets token
//Access: Public

router.post('/',
    // [
        // check('email', 'Please Enter a registered Email').isEmail().not().isEmpty(),
        // check('password', 'Please enter a valid password').exists()],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);


        const {PharmaEmail, PharmaPassword} = req.body;

        try{
            let pharmacy = await Pharmacy.findOne({PharmaEmail});

            //Check is  user exists

            if(!pharmacy){
                res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }


            const isMatch = await bcrypt.compare(PharmaPassword,pharmacy.PharmaPassword);

            if(!isMatch){
                res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }




            //Return JWT
            const payload = {
                pharmacy:{
                    id: pharmacy.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecretPharma'),
                {expiresIn: 360000},
                (err, token)=> {
                    if(err) throw err;
                    res.json({token})

                });




        } catch(err){
            console.error(err.message);
            res.status(500).send("Server Error");

        }






    });

module.exports = router;