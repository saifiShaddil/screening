const mongoose = require('mongoose')

const model = mongoose.Schema({
    data: {
        type: Number,
    }
});

module.exports = new mongoose.model("Data", model)