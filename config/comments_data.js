const mongoose = require("mongoose");

let data = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("sample", data);