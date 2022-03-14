const mongoose = require('mongoose')

const model = mongoose.Schema({
    email: {
        type: String,
    },
    data: {
        type: String,
    }
});

module.exports = new mongoose.model("PieChart", model)