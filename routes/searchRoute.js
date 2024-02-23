const express = require("express");
const searchController = require("../controllers/searchController");
const router = express.Router();

router.post("/", async (req, res) => {
    const result = await searchController.search(req.body.query);
    console.log(result);
    if(result) {
        res.render("services", {
            services: result,
            errors: req.flash("errors"),
        });
    } else {
        req.flash("errors", {msg: "محتوای مورد نظر شما وجود ندارد."})
    }
})

module.exports = router;