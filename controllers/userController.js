const users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("../validators/userValidator");

class UserController {
    loginGET(req, res, next) {
        try {
            res.render("login", { errors: req.flash("errors") });
            next();
        } catch (error) {
            req.flash("errors", "خطا در دریافت اطلاعات");
            next();
        }
    }

    async loginPOST(req, res, next) {
        try {
            let user = await users.findOne({
                username: req.body.user,
            });

            if (user) {
                if (await bcrypt.compare(req.body.password, user.password)) {
                    res.cookie(
                        "token",
                        await jwt.sign(
                            {
                                username: user.username,
                                email: user.email,
                            },
                            process.env.JWT_SECRET,
                            { expiresIn: "2h" }
                        ),
                        {
                            secure: false,
                            maxAge: 2 * 3600 * 1000,
                            httpOnly: true,
                        }
                    );
                    res.redirect("/");
                    next();
                } else {
                    user = await users.findOne({
                        email: req.body.user,
                    });
                    if (user) {
                        if (
                            await bcrypt.compare(
                                req.body.password,
                                user.password
                            )
                        ) {
                            res.cookie(
                                "token",
                                await jwt.sign(
                                    {
                                        username: user.username,
                                        email: user.email,
                                    },
                                    process.env.JWT_SECRET,
                                    { expiresIn: "2h" }
                                ),
                                {
                                    secure: false,
                                    maxAge: 2 * 3600 * 1000,
                                    httpOnly: true,
                                }
                            );
                            res.redirect("/");
                            next();
                        } else
                            throw new Error(
                                "حساب کاربری با این مشخصات یافت نشد"
                            );
                    } else
                        throw new Error("حساب کاربری با این مشخصات یافت نشد");
                }
            } else throw new Error("حساب کاربری با این مشخصات یافت نشد");
        } catch (error) {
            // req.flash("errors", error.message);
            res.send(error.message);
            next();
        }
    }

    signupGET(req, res, next) {
        try {
            res.render("signup", { errors: req.flash("errors") });
            next();
        } catch (error) {
            req.flash("errors", "خطا در دریافت اطلاعات");
            next();
        }
    }

    async signupPOST(req, res, next) {
        await new users({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(
                req.body.password,
                await bcrypt.genSalt(15)
            ),
            dateCreated: Date.now(),
        }).save();
        try {
        } catch (error) {
            req.flash("errors", error.message);
            next();
        }
    }
}

module.exports = new UserController();
