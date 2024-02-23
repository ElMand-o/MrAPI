const express = require("express");
const router = express.Router();
const apiController = require('../controllers/apiController')

router
    .route("/")
    .get((req, res, next) => apiController.apisGET(req, res, next))
    .post((req, res, next) => apiController.apisPOST(req, res, next));

router
    .route("/api/:name")
    .get((req, res, next) => apiController.apiGET(req, res, next))
    .put((req, res, next) => apiController.apiPUT(req, res, next));

module.exports = router;
