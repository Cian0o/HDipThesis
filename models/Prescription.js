const mongoose = require('mongoose');

const PrescSchema = new mongoose.Schema({
    PPSN:{
        type: String,
        required: true,
    },
    patientName :{
        type: String,
        required: true,
    },
    presFreQ:{
        type: Number,
        required: true
    },
    prescContents:{
        type: String,
        required: true
    },
    presDosageMG:{
        type: Number,
        required: true
    },
    prescribedDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    dispensedDate:{
        type: Date,
        default: Date.now
    //    similar to like button?
    },
    isDue:{
        type: Boolean,
    },

});

module.exports = Prescription = mongoose.model('prescription',PrescSchema);