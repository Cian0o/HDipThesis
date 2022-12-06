const mongoose = require('mongoose');

const SurgerySchema = new mongoose.Schema({
    PatientPPSN:{
        type: Number,
        required: true,
        unique: true
    },
    PatientName :{
        type: String,
        required: true,
        unique: true
    },
    DocPassword:{
        type: String,
        required: true
    },
    DocPasswordConf:{
        type: String,
        required: true
    },
    DocName:{
        type: String,
        required: true
    },
    DocPhone:{
        type: Number,
        required: true,
        unique: true
    },
    DocAddress:{
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

module.exports = Surgery = mongoose.model('surgery',SurgerySchema);