const mongoose = require('mongoose')

const model = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    },
    age: {
        type: Number,
    },
    mobile: {
        type: Number
    }
});

module.exports = new mongoose.model("UserData", model)