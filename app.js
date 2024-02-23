// Import libraries
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

// Set middlewares
require("dotenv").config({ path: __dirname + "/config.env" });
app.set("view engine", "ejs");
app.set("views",__dirname+"/src/views");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());

// Connect to MongoDB
(async () => {
    await mongoose.connect(process.env.MONGODB);
})()
    .then(`Connected to MongoDB successfully!\nAddress: ${process.env.MONGODB}`)
    .catch((err) => {
        console.error(
            `An unexpected error happened while connecting to MongoDB: ${err}`
        );
    });

app.use('/', require('./routes/routeManager'));

// Export module(app)
module.exports = app;
