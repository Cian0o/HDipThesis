const mongoose = require('mongoose');

const PharmacySchema = new mongoose.Schema({
    PSIN:{
        type: Number,
        required: true,

    },
    PharmaEmail:{
        type: String,
        required: true,

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

module.exports = Pharmacy = mongoose.model('pharmacy',PharmacySchema);