var db = require("../models/burger");

var burger = {
  all: function(cb) {
    db.burger.findAll({
    }).then(cb)
  },
  create: function(name, cb) {
    db.burger.create({
      where: {
        burger_name: name,
        devoured: false
      }
    }).then(cb)
  },
  update: function(id, cb) {
    // var condition = "id=" + id;
    db.burger.update({
        where: {
          id: id
        },
      devoured: true
    }).then(condition, cb);
  }
};

module.exports = burger;