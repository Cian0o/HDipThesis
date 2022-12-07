const express = require('express');
const pharmaauth = require('../../middleware/pharmaauth')
const Pharmacy = require('../../models/Pharmacy');
const router = express.Router();

// route is: GET api/docauth
// Description: Test Route
// Access: Public
router.get('/', pharmaauth, async (req, res) => {
    try{
        const pharmacy = await Pharmacy.findById(req.pharmacy.id).select('-password');
        res.json(pharmacy);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;