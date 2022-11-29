const mongoose = require('mongoose');

const SurgerySchema = new mongoose.Schema({
    Field0:{
        type: Number,
        required: true
    },
    Field1:{
        type: String,
        required: true,
    },
    Field2:{
        type: String,
        required: true,
    },
    Field3:{
        type: String,
        required: true,
    },
    Field4:{
        type: String,
        required: true,
    },
    Field5:{
        type: String,
        required: true,
    },

});

module.exports = Surgery = mongoose.model('surgery',SurgerySchema);