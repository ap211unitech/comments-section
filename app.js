const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const expresslayouts = require("express-ejs-layouts")

//For DB connection
require("./config/connections")

//Middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//View engine
app.set("views", "./views");
app.use(expresslayouts);
app.set("view engine", "ejs");

//Public folder
app.use("/public", express.static("public"));


//End points
app.use("/comments", require("./routes/comments"));

app.listen(80, () => {
    console.log("Server started at port 80")
})