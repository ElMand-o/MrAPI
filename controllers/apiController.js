// const Controller = new (require('./controller'))();
const apis = require("../models/apiModel");

class ApiController {
    async apisGET(req, res, next) {
        try {
            const services = await apis.find({});
            apis.find();
            res.render("services", { services });
            next();
        } catch (error) {
            res.render("services", { errors: { msg: "خطا هنگام دریافت اطلاعات" } });
        }
    }

    async apisPOST(req, res, next) {
        try {

            next();
        } catch (error) {
            res.render("addApi", { errors: { msg: "خطا هنگام افزودن اطلاعات" } });
        }
    }
    async apiGET(req, res, next) {
        try {
            const service = await apis.findOne({ url: req.params.name });
            res.render("api", { data: service });
            next()
        } catch (error) {
            res.render("api", { errors: {msg: "خطا هنگام دریافت اطلاعات"} });
        }
    }
    async apiPUT(req, res, next) {
        try {
            
            next();
        } catch (error) {
            res.render("updateApi", { errors: { msg: "خدا هنگام بروزرسانی اطلاعات" } });
        }
    }
}

module.exports = new ApiController();
