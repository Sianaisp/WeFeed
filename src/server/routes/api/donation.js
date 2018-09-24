const express = require("express");
const router = express.Router();
// const Donation = require("../models/Donation");
const Donation = require("../../models/Donation");
//const { attend } = require("../utils/attend");
// const fs = require("fs");

router.post("/", (req, res) => {
    const {
        donationtitle,
        food,
        foodvalue,
        address,
        pick_up_date,
        venuename,
        cooked,
        city,
        special_instructions,
        designated_charities,
        lat,
        lng
    } = req.body;

    new Donation({
        donationtitle,
        food,
        foodvalue,
        address,
        pick_up_date,
        venuename,
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

router.get("/", (req, res) => {
    Donation.find().then(donations => {
        res.send(donations);
    });
});

module.exports = router;
