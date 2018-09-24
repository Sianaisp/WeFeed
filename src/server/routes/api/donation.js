const express = require("express");
const router = express.Router();
// const Donation = require("../models/Donation");
const Donation = require("../../models/Donation");
//const { attend } = require("../utils/attend");
// const fs = require("fs");

router.post("/", (req, res) => {
    const {
        food,
        value,
        address,
        pick_up_date,
        picture,
        cooked,
        city,
        special_instructions,
        designated_charities,
        lat,
        lng
    } = req.body;

    new Donation({
        food,
        value,
        address,
        pick_up_date,
        picture,
        city,
        cooked,
        special_instructions,
        designated_charities,
        lat,
        lng
    })
        .save()
        .then(donation => {
            console.log("donation back end: ", donation);
            res.send(donation);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
