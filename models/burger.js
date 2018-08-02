// import orm
var orm = require("../config/orm.js");

// burger object that houses our orm
var burger = {
  all: function (cb) {
    // show all burgers
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // create a new burger  
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //   update a burger
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// export the database functions for the controller
module.exports = burger;