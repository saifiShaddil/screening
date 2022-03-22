const mongoose = require('mongoose')

const model = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    dob : { type: String},
    age : { type: Number},
    gender : { type: String },
    mobile : { type: Number},
    password: {
        type: String,
        required: true,
    }
});

module.exports = new mongoose.model("User", model)