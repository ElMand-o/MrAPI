// const Controller = new (require('./controller'))();
const apis = require("../models/apiModel");

class ApiController {
    async apisGET(req, res, next) {
        const services = await apis.find({});
        apis.find()
        res.render("services", { services });
        next();
    }

    async apisPOST(req, res, next) {}
    async apiGET(req, res, next) {
        try {
            const service = await apis.findOne({ url: req.params.name });
            if (service) {
                res.render("api", { data: service });
            } else {
                throw new Error("Error finding api");
            }
        } catch (error) {
            res.send("Error");
        }
    }
    async apiPUT(req, res, next) {}
}

module.exports = new ApiController();
