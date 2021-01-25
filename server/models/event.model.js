const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
   
    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim: true,
    },

    startDate: {
        type: Date,
        required: true,
        default: Date.now()
    },

    color: {
        type: String,
    },

    start: {
        type: Date,
    },

    end: {
        type: Date,
    },

}, {
    timestamps: true
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;