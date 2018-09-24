const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const donationRoutes = require("./donation");
const { userMiddleware, checkLoggedIn } = require("../../utils/middleware");

router.use(userMiddleware);

router.get("/protected", checkLoggedIn, (req, res) => {
    console.log("USER", req.user);
    res.send({ success: true });
});

router.use("/auth", authRoutes);
router.use("/donation", donationRoutes);

router.use((req, res) => {
    res.status(404).send({ error: "not-found" });
});

module.exports = router;
