const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

const  Pharmacy = require('../../models/Pharmacy')
// route is: GET api/auth
// Description: Test Route
// Access: Public
router.post('/', [
        check('PSIN', 'Please Enter a valid PSI Number').isNumeric().not().isEmpty()
        , check('PharmaEmail', 'Please Enter an Email').isEmail().not().isEmpty(),
        check('PharmaPassword', 'Password Should Contain at  least  8 characters').isLength({min: 8})],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);


        const {PSIN, PharmaEmail, PharmaPassword, PharmaPasswordConf, PharmaName, PharmaPhone, PharmaAddress} = req.body;

        try{
            let pharmacy = await Pharmacy.findOne({PharmaEmail});

            //Check is  user exists

            if(pharmacy){
                res.status(400).json({errors: [{msg: 'There is already a pharmacy registered against this email'}]});
            }

            //Get Doctor's Avatar
            const Pharmaavatar = gravatar.url(PharmaEmail, {s: '200', d: 'mm'});

            pharmacy = new Pharmacy({
                PSIN,
                PharmaEmail,
                PharmaPassword,
                PharmaPasswordConf,
                PharmaName,
                PharmaPhone,
                PharmaAddress

            });

            //Salt & Hash Password
            const salt = await bcrypt.genSalt(12);
            pharmacy.PharmaPassword = await bcrypt.hash(PharmaPassword, salt);
            await pharmacy.save()


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
                    // res.send('Pharmacy Successfully Registered!');
                });



            // res.send('Pharmacy Successfully Registered!');
        } catch(err){
            console.error(err.message);
            res.status(500).send("Server Error");

        }






    });

module.exports = router;