// var express = require("express");
// var router = express.Router();
var Burger = require("../models/burger");

module.exports = function(app) {
  // app.get("/", function(req, res) {
  //   res.redirect("/burgers");
  // });

  app.get("/burgers", function(req, res) {
    Burger.findAll({})
    .then(result => {res.json(result)});
  });

  app.post("/burgers/create", function(req, res) {
    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(result => {res.json(result)});
  });

  app.put("/burgers/update/:id", function(req, res) {
    Burger.update(
      req.body,
      {
        where: {
          id: req.body.id
      }
      }).then(result => {res.json(result)});
  });
};