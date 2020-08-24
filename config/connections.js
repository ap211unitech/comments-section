const mongoose = require("mongoose");
const assert = require("assert");

mongoose.connect("mongodb://127.0.0.1:27017/comments", { useUnifiedTopology: true, useNewUrlParser: true }, (error, link) => {

    //Check error
    assert.equal(error, null, "Db connect fails...");

    //If all good
    console.log("Db connect success");
    // console.log(link);

});