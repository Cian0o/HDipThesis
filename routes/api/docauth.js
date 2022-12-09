const express = require('express');
const docauth = require('../../middleware/docauth')
const Surgery = require('../../models/Surgery');
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require('mongoose');
const router = express.Router();

// route is: GET api/docauth
// Description: Test Route
// Access: Public
router.get('/', docauth, async (req, res) => {
    try{
        const surgery = await Surgery.findById(req.surgery.id).select('-DocPassword')
        res.json(surgery);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//Route: POST to api/auth
//Authenticates users and gets token
//Access: Public

router.post('/',
    // [
    //     check('DocEmail', 'Please Enter a registered Email').isEmail().exists(),
    //     check('DocPassword', 'Please enter a valid password').exists()],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);


        const {DocEmail, DocPassword} = req.body;

        try{
            const surgery = await Surgery.findOne( {DocEmail} );



            //Check is  user exists

            if(!surgery){
                res.status(400).json({errors: [{msg: 'Invalid Email'}]});
            }


            const isMatch = await bcrypt.compare(DocPassword, surgery.DocPassword);

            if(!isMatch){
                res.status(400).json({errors: [{msg: 'Invalid Password'}]});
            }




            //Return JWT
            const payload = {
                surgery:{
                    id: surgery.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecretDoc'),
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