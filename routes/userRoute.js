const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
    .route("/login")
    .get((req, res, next) => userController.loginGET(req, res, next))
    .post((req, res, next) => userController.loginPOST(req, res, next));

router
    .route("/signup")
    .get((req, res, next) => userController.signupGET(req, res, next))
    .post((req, res, next) => userController.signupPOST(req, res, next));

module.exports = router;
