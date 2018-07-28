// import orm
var orm = require("../config/orm.js");

// if it's not burger, then it's burgers
var burger = {
    all: function(cb) {
        // show all burgers
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
        // create a new burger  
      create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
    //   update a burger
      update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
    };

// export the database functions for the controller

module.exports = burger;