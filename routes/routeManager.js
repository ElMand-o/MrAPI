const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index");
    next();
});

router.use("/apis", require("./apiRoute"));
router.use("/search", require("./searchRoute"));
router.use("/user", require("./userRoute"));

// router.all("*", (req, res) => {
//     try {
//         res.status(404).render("404");
//     } catch (error) {}
// });

module.exports = router;
