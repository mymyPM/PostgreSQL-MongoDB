const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

//set up the express app
const app = express();

//log requests to the console
app.use(logger("dev"));

//parser incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//setup a default catch-all router that sends back a welcome message
require("./server/routers")(app);
app.get("*", (req, res) => res.status(200).send({
    message: "Welcome...",
}));
module.exports = app;