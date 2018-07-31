var express = require("express");

var router = express.Router();

// import the burger model to use db functions
var burger = require("../models/burger.js");

// create all the routes and all the logic associated with each
// get
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post
router.post("/burgers", function(req, res) {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [req.body.burger_name, req.body.devoured
    ], function(data) {
        res.redirect("/");
    });
});

// put
// router.put("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     burger.updateOne({
//         devoured: req.body.devoured
//     }, condition, function(result) {
//         res.redirect("/");
//     });
// });

router.put("/burgers/update", function(req, res) {
    burger.updateOne(req.body.id, function(result) {
        console.log(result);
        res.redirect("/");

    })
})

// I still need to figure out how to get my put to work, getting a cannot post error message

// Export routes for server.js to use.
module.exports = router;