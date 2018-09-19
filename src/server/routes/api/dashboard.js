const express = require("express");
const router = express.Router();

const fs = require("fs");
// const Events = require('../models/Events');
const Volunteer = require("../models/Volunteer");
const Charity = require("../models/Charity");
const Donator = require("../models/Donator");

router.get("/dashboard", (req, res) => {
    if (req.user === undefined) {
        res.redirect("auth/signupdon");
    } else if (req.user.email === undefined && req.user.collection.collectionName === "volunteers") {
        res.render("create/create-volunteer", { user: req.user });
    } else if (req.user.email === undefined && req.user.collection.collectionName === "donators") {
        res.render("create/create-donator", { user: req.user });
    } else if (req.user.email === undefined && req.user.collection.collectionName === "charities") {
        res.render("create/create-charity", { user: req.user });
        // } else {
        //     Events.find()
        //         .populate({ path: "attendees", select: "username -_id" })
        //         .then(events => {
        //             events.forEach(element => {
        //                 if (element.attendees.length > 0) {
        //                     console.log("INVITED " + element.attendees[0]);
        //                 }
        //             });
        //             let user = req.user;

        //             res.render("dashboard", { events, user });
        //         });
        // }
    }
});

// router.get("/dashboard/:type", (req, res) => {
//     let type = req.params.type;
//     if (req.user === undefined) {
//         res.redirect("auth/signupdon");
//     } else if (req.user.email === undefined && req.user.collection.collectionName === "volunteers") {
//         res.render("create/create-volunteer", { user: req.user });
//     } else if (req.user.email === undefined && req.user.collection.collectionName === "donators") {
// 		res.render("create/create-donator", { user: req.user });
// 	} else if (req.user.email === undefined && req.user.collection.collectionName === "charities") {
//         res.render("create/create-charity", { user: req.user });
//     } else {
//         Events.find({ type }).then(events => {
//             //res.send(events);

//             let user = req.user;
//             res.render("dashboard", { events, user });
//         });
//     }
// });

// res.render("dashboard");

// router.post("/dashboard/attend", (req, res) => {
//     //WE NEED TO RETRIEVE ID OF THE EVENT CLICKED AND ID OF THE USER
//     const { _id } = req.body;
//     let user = req.user._id;
//     Events.findById({ _id: _id }, (err, event) => {
//         if (err) console.log(err);

//         if (event.attendees.indexOf(user) === 0) {
//             console.log("youre already attending");
//             Events.findByIdAndUpdate(
//                 { _id: _id },
//                 {
//                     $pull: { attendees: user }
//                 },
//                 { new: true },
//                 (err, Event) => {
//                     if (err) console.log(err);

//                     res.redirect("/dashboard");
//                 }
//             );
//         } else {
//             Events.findByIdAndUpdate(
//                 { _id: _id },
//                 {
//                     $push: { attendees: user }
//                 },
//                 { new: true },
//                 (err, Event) => {
//                     if (err) console.log(err);

//                     res.redirect("/dashboard");
//                 }
//             );
//         }
//     });
// });

module.exports = router;
