const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");

const User = require("../models/User");

/* GET home page */
router.get("/", ensureLogin.ensureLoggedIn("/auth/login"), (req, res, next) => {
    if (req.user.role === "Volunteer") {
        res.render("volunteer_profile", { user: req.user });
    } else if (req.user.role === "Donator") {
        res.render("donator_profile", { user: req.user });
    } else if (req.user.role === "Charity") {
        res.render("charity_profile", { user: req.user });
    }
});

router.get("/edit", (req, res, next) => {
    if (req.user.role === "Volunteer") {
        res.render("edit-volunteer", { user: req.user });
    } else if (req.user.role === "Donator") {
        res.render("edit-donator", { user: req.user });
    } else if (req.user.role === "Charity") {
        res.render("edit_donator", { user: req.user });
    }
});

// router.get("/edit/:id", ensureLogin.ensureLoggedIn("/auth/logincomp"), (req, res, next) => {
//     let user = req.user;
//     res.render("create/create-company", { user });
// });

// router.post("/edit", (req, res, next) => {
//     if (!req.files) return res.status(400).send("No files were uploaded.");
//     const file = req.files.picture;

//     req.files.picture.mv(`public/images/${req.user.id}.jpg`, function(err) {
//         if (err) return res.status(500).send(err);

//         const { username, email, picture, city, address, number, website, type, cuisine } = req.body;

//         Charity.findByIdAndUpdate(req.user, {
//             username,
//             email,
//             type,
//             picture,
//             city,
//             address,
//             number,
//             cuisine,
//             website
//         })
//             .then(() => {
//                 console.log("updated charity");
//                 res.redirect("/charity_profile");
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     });
// });

module.exports = router;
