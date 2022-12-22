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






// route is: POST api/prescription
// Description: Submit Prescription Route
// Access: Private (prescMiddle to be readded)

router.post('/',  [
        check('PPSN', 'Please Enter a valid PPS Number').not().isEmpty()
        , check('patientName', 'Please Enter an Patient Name').not().isEmpty(),
        check('presFreQ', 'Please enter a  prescription frequency in days').isNumeric().not().isEmpty(),
        check('prescContents', 'Please specify prescription contents').not().isEmpty(),
        check('prescDosageMG', 'Please specify prescription dosage').not().isEmpty()],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);


        const {PPSN, patientName, presFreQ, prescContents, prescDosageMG} = req.body;

        try{
            prescription = new Prescription({
                PPSN,
                patientName,
                presFreQ,
                prescContents,
                prescDosageMG

            });

            await prescription.save()

            res.send('Prescription Submitted Successfully');
        } catch(err){
            console.error(err.message);
            res.status(500).send("Server Error");

        }
    });


// route is: PUT api/prescription
// Description: Amend Prescription Route
// Access: Private

router.put('/', prescMiddle, )

module.exports = router;