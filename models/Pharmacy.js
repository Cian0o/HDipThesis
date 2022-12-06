const mongoose = require('mongoose');

const PharmacySchema = new mongoose.Schema({
    PSIN:{
        type: Number,
        required: true,
        unique: true
    },
    PharmaEmail:{
        type: String,
        required: true,
        unique: true
    },
    PharmaPassword:{
        type: String,
        required: true
    },
    PharmaPasswordConf:{
        type: String,
        required: true
    },
    PharmaName:{
        type: String,
        required: true
    },
    PharmaPhone:{
        type: Number,
        required: true,
        unique: true
    },
    PharmaAddress:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
    },
    Date:{
        type: Date,
        default: Date.now
    },

});

module.exports = Pharmacy = mongoose.model('surgery',PharmacySchema);