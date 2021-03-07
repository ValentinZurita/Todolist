const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//Globals
var items = ["uno", "dos", "tres"];

app.get("/", function (req, res) {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-GB", options);

    res.render("list", {kindOfDay: day, itemsList: items});
    
});

app.post("/", function (req,res) {
    var item = req.body.newItem;

    items.push(item);
    res.redirect("/");

})

app.listen(3000, function () {
    console.log("Server is up and running");
})