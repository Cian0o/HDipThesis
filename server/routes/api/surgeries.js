const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const router = express.Router();

const  Surgery = require('../../models/Surgery')
// route is: POST api/surgeries
// Description: Dev Route
// Access: Public (for registering)
router.post('/', [
        check('IMCN', 'Please Enter a valid IMC Number').isNumeric().not().isEmpty(),
         check('DocEmail', 'Please Enter an Email').isEmail().not().isEmpty(),
        check('DocPassword', 'Password Should Contain at  least  8 characters').isLength({min: 8})],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);


        const {IMCN, DocEmail, DocPassword, DocPasswordConf, DocName, DocPhone, DocAddress} = req.body;

        try{
            let surgery = await Surgery.findOne({DocEmail});

            //Check is  user exists

            if(surgery){
                res.status(400).json({errors: [{msg: 'There is already a surgery registered against this email'}]});
            } else{


            }

            //Get Doctor's Avatar
            const Docavatar = gravatar.url(DocEmail, {s: '200', d: 'mm'});

            surgery = new Surgery({
                IMCN,
                DocEmail,
                DocPassword,
                DocPasswordConf,
                DocName,
                DocPhone,
                DocAddress

            });

            //Salt & Hash Password
            const salt = await bcrypt.genSalt(12);
            surgery.DocPassword = await bcrypt.hash(DocPassword, salt);
            await surgery.save()


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
                    // res.send('Surgery Successfully Registered!');
                });



            // res.send('Surgery Successfully Registered!');
        } catch(err){
            console.error(err.message);
            res.status(500).send("Server Error");

        }






    });

module.exports = router;