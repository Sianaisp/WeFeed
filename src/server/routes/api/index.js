const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const { userMiddleware, checkLoggedIn } = require("../../utils/middleware");

router.use(userMiddleware);

router.get("/", (req, res) => {
    res.send({ hello: true });
});

router.get("/protected", checkLoggedIn, (req, res) => {
    console.log("USER", req.user);
    res.send({ success: true });
});

router.use("/auth", authRoutes);

router.use((req, res) => {
    res.status(404).send({ error: "not-found" });
});

router.get("/donator_profile", (req, res, next) => {
    res.render("donator_profile", { user: req.user });
});

// router.get("/profile", (req, res, next) => {
//     if (req.user.role === "Volunteer") {
//         res.render("volunteer_profile", { user: req.user });
//     } else if (req.user.role === "Donator") {
//         res.render("donator_profile", { user: req.user });
//     } else if (req.user.role === "Charity") {
//         res.render("charity_profile", { user: req.user });
//     }
// });

module.exports = router;
