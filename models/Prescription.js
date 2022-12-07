const mongoose = require('mongoose');

const SurgerySchema = new mongoose.Schema({
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
    presDosage:{
        type: Number,
        required: true
    },
    prescribedDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    dispensedDate:{
        type: String,
        default: Date.now
    //    similar to like button?
    },
    isDue:{
        type: Boolean,
    },

});

module.exports = Prescription = mongoose.model('prescription',PrescSchema);