const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    descriptionShort: {
        type: String,
        required: true,
    },
    statistics: {
        type: Object,
        required: true,
    },
    dateCreated: {
        type: Date,
        requried: true
    },
    creator: {
        // type: mongoose.Types.ObjectId,
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    tag: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("API", apiSchema,"API")