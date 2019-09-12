const db = require("../models");

var burger = {
  all: function(cb) {
    db.burger.findAll({}).then(cb);
  },
  create: function(name, cb) {
    db.burger.create({
      "burger_name": name
    }).then(cb);
  },
  update: function(id, cb) {
    db.burger.update({
      devoured: true
    },
    {
      where: {
        id
      }
    }).then(cb);
  }
};

module.exports = burger;