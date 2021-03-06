// dependencies
var express = require("express");
var router = express.Router();

// import the burger model to use db functions
var burger = require("../models/burger.js");

// create all the routes and all the logic associated with each
// get
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post
router.post("/burgers", function (req, res) {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [req.body.burger_name, false
        ], function (data) {
            res.redirect("/");
        });
});

// put
router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        devoured: true
    }, condition, function (result) {
        console.log(result);
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

// Export routes for server.js to use.
module.exports = router;