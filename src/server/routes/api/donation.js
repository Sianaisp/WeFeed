const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");
//const { attend } = require("../utils/attend");
// const fs = require("fs");

const Donator = require("../models/Donator");

router.get("/create", (req, res, next) => {
    res.render("create/post-donation", { user: req.user });
});

router.get("/:id/delete", (req, res, next) => {
    Donation.findByIdAndRemove({ _id: req.params.id }, (err, donation) => {
        if (err) console.log(err);
        res.redirect("/dashboard");
    });
});

router.post("/create", (req, res, next) => {
    if (!req.files) return res.status(400).send("No files were uploaded.");
    const file = req.files.picture;
    console.log(file);

    //if (err) return res.status(500).send(err);

    const {
        food,
        value,
        address,
        pick_up_date,
        picture,
        cooked,
        city,
        special_instructions,
        designated_charities
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
        designated_charities
    })
        .save()
        .then(event => {
            file.mv(`public/images/${event._id}.jpg`, function(err) {
                console.log("event created,pic uploaded, pic name: " + req.params.id);
                res.redirect("/dashboard");
            });

            //res.redirect('/:id'); //link to the event/id/profile
        })
        .catch(error => {
            console.log(error);
        });
});

// /* GET home page */
// router.get('/:id', (req, res, next) => {
// 	Events.findById(req.params.id)
// 		.then((event) => res.render('event-page', { event: req.params }))
// 		.catch((err) => console.log(err));
// });
// /* GET home page */
router.get("/:id", (req, res, next) => {
    if (req.user === undefined) {
        res.redirect("auth/signup");
    } else if (req.user.email === undefined && req.user.collection.collectionName === "volunteers") {
        res.render("create/create-volunteer", { user: req.user });
    } else if (req.user.email === undefined && req.user.collection.collectionName === "charities") {
        res.render("create/create-charity", { user: req.user });
    } else if (req.user.email === undefined && req.user.collection.collectionName === "donators") {
        res.render("create/create-donator", { user: req.user });
    } else {
        let user = req.user;

        Events.findById(req.params.id).then(donation => {
            User.find().then(user => {
                res.render("donation-page", { donation, donator });
            });
        });
    }
});

router.post("/:id/attend", (req, res) => {
    console.log("I FOUNT STUFF " + req.params.id);
    attend(req.params.id, req.user);
});

router.get("/:id/edit", (req, res) => {
    Events.findById(req.params.id).then(event => {
        res.render("create/edit-donation", { donation });
    });
});

router.post("/:id/edit", (req, res) => {
    if (!req.files) {
        const {
            title,
            food,
            value,
            address,
            pick_up_date,
            picture,
            city,
            cooked,
            special_instructions,
            designated_charities
        } = req.body;

        Donation.findByIdAndUpdate(req.params.id, {
            title,
            food,
            value,
            address,
            pick_up_date,
            city,
            picture,
            cooked,
            special_instructions,
            designated_charities
        })
            .then(() => {
                let donation = req.params.id;
                console.log("updated donation " + donation);
                // res.send('UPDATE DONE');
                res.redirect("/dashboard");
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        const file = req.files.picture;
        file.mv(`public/images/${req.params.id}.jpg`, function(err) {
            const {
                title,
                food,
                value,
                address,
                pick_up_date,
                picture,
                city,
                cooked,
                special_instructions,
                designated_charities
            } = req.body;

            Donation.findByIdAndUpdate(req.params.id, {
                title,
                food,
                value,
                address,
                pick_up_date,
                picture,
                city,
                cooked,
                special_instructions,
                designated_charities
            })
                .then(() => {
                    let donation = req.params.id;
                    console.log("updated donation " + donation);

                    res.redirect("/dashboard");
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
});

module.exports = router;
