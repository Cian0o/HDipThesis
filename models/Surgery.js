const mongoose = require('mongoose');

const SurgerySchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    IMCN:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
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