// var express = require("express");
// var router = express.Router();
var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // app.get("/", function(req, res) {
  //   res.redirect("/burgers", {});
  // });

  app.get("/burgers", function(req, res) {
    db.Burger.findAll({})
    .then(result => {res.json(result)});
  });

  // Get route for retrieving a specific burger
  app.get("/burgers/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Burger.findOne({
      where: { id: req.params.id }
    }).then(result => {res.json(result)});
  });

  app.post("/burgers/create", function(req, res) {
    // console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name
      // devoured: req.body.devoured
    }).then(result => {
      console.log(res.json(result));
      return path.join(__dirname, '/');
      });
  });
  
  // DELETE route for deleting burgers
  app.delete("/burgers/delete/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {res.json(result)});
  });

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