// var express = require("express");
// var router = express.Router();
var db = require("../models/burger");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  app.get("/burgers", function(req, res) {
    db.Burger.findAll({})
    .then(result => {res.json(result)});
  });

  app.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(result => {res.json(result)});
  });

  // put route -> back to index
  app.put("/burgers/update/:id", function(req, res) {
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.body.id
      }
      }).then(result => {res.json(result)});
  });
};