const express = require('express');

const bcrypt = require('bcryptjs');
const {check, validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

const  Prescription = require('../../models/Prescription')
const prescMiddle = require('../../middleware/prescMiddle')


// route is: GET api/prescription
// Description: Retrieve Prescription Route
// Access: Private


router.get('/', prescMiddle, async (req, res) => {
    try{
        const PPSN = req.body;
        const prescription = await Prescription.find(PPSN);
        res.json(prescription);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



// router.get('/', docauth, async (req, res) => {
//     try{
//         const surgery = await Surgery.findById(req.surgery.id).select('-DocPassword')
//         res.json(surgery);
//     } catch(err){
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });



router.post('/', prescMiddle, [
        check('PPSN', 'Please Enter a valid PPS Number').not().isEmpty()
        , check('patientName', 'Please Enter an Patient Name').not().isEmpty(),
        check('presFreQ', 'Please enter a  prescription frequency in days').isNumeric().not().isEmpty(),
        check('prescContents', 'Please specify prescription contents').not().isEmpty(),
        check('presDosageMG', 'Please specify prescription dosage').not().isEmpty()],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);


        const {PPSN, patientName, presFreQ, prescContents, presDosageMG} = req.body;

        try{
        //     let pharmacy = await Pharmacy.findOne({PharmaEmail});
        //
        //     //Check is  user exists
        //
        //     if(pharmacy){
        //         res.status(400).json({errors: [{msg: 'There is already a pharmacy registered against this email'}]});
        //     }



            prescription = new Prescription({
                PPSN,
                patientName,
                presFreQ,
                prescContents,
                presDosageMG

            });

            await prescription.save()

            res.send('Prescription Submitted Successfully');

            //Salt & Hash Password
            // const salt = await bcrypt.genSalt(12);
            // pharmacy.PharmaPassword = await bcrypt.hash(PharmaPassword, salt);
            // await pharmacy.save()
            //
            //
            // //Return JWT
            // const payload = {
            //     pharmacy:{
            //         id: pharmacy.id
            //     }
            // }
            // jwt.sign(
            //     payload,
            //     config.get('jwtSecretPharma'),
            //     {expiresIn: 360000},
            //     (err, token)=> {
            //         if(err) throw err;
            //         res.json({token})
            //         // res.send('Pharmacy Successfully Registered!');
            //     });



            // res.send('Pharmacy Successfully Registered!');
        } catch(err){
            console.error(err.message);
            res.status(500).send("Server Error");

        }






    });

module.exports = router;