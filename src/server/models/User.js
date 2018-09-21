const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: {
        type: String,
        enum: ["Charity", "Volunteer", "Donator"],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default:
            "https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg"
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    // phoneNumber: {
    // 	type: String
    // },
    // website: {
    //     type: String
    // },

    car: {
        type: String
    },
    availability: {
        type: String
    },

    cuisine: {
        type: String
    },

    category: {
        type: String,
        enum: ["Restaurant", "Grocery Store", "Farm", "Cafetaria", "Hotel", "Events", ""]
    }
});

module.exports = mongoose.model("User", userSchema);
