const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
   
    title: {
        type: String,
        trim: true,
        required: true
    },

    backgroundColor: {
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