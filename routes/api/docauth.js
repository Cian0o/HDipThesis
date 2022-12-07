const express = require('express');
const docauth = require('../../middleware/docauth')
const Surgery = require('../../models/Surgery');
const router = express.Router();

// route is: GET api/docauth
// Description: Test Route
// Access: Public
router.get('/', docauth, async (req, res) => {
    try{
        const surgery = await Surgery.findById(req.surgery.id).select('-password');
        res.json(surgery);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;