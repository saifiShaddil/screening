const mongoose = require('mongoose')

const model = mongoose.Schema({
    email: {
        type: String,
    },
    data: {
        type: Array,
    }
});

module.exports = new mongoose.model("Data", model)