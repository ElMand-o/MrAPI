const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index");
    next();
});

router.use("/apis", require("./apiRoute"));
router.use("/user", require("./userRoute"));

// router.all("*", (req, res) => res.status(404).send('Not found'))

module.exports = router;
