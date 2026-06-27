const mongoose = require("mongoose");

const contact = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    numbers: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})