const mongoose = require('mongoose');

const SurgerySchema = new mongoose.Schema({
    IMCN:{
        type: Number,
        required: true,

    },
    DocEmail:{
        type: String,
        required: true,

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