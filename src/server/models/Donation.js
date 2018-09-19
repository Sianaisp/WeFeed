const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    title: String,
    food: String,
    picture: String,
    value: String,
    address: String,
    city: String,
    pick_up_date: Date,
    cooked: String,
    special_instructions: String,
    designated_charities: String
});

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;
