var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    routes = require('./routes/index'),
    users = require('./routes/users');

mongoose.connect("mongodb://mongo/tutorialcreator");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, function(){
   console.log("Tutorial creator has started");
});
