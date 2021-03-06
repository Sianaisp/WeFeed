const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    donationtitle: { type: String },
    food: { type: String },
    foodvalue: { type: String },
    address: { type: String },
    city: { type: String },
    pick_up_date: { type: Date },
    cooked: { type: String },
    special_instructions: { type: String },
    designated_charities: { type: String },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },
    venuename: { type: String }
});

module.exports = mongoose.model("Donation", donationSchema);
