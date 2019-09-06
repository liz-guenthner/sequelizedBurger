// // Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.INTEGER,
      defaultValue: false
    }
  });
  return Burger;
}


// Creates a "Character" model that matches up with DB
// var Burger = sequelize.define("burger", {
//   // the routeName gets saved as a string
//   burger_name: Sequelize.STRING,
//   // the name of the character (a string)
//   name: Sequelize.STRING,
//   // the character's role (a string)
//   role: Sequelize.STRING,
//   // the character's age (a string)
//   age: Sequelize.INTEGER,
  
//   // and the character's force points (an int)
//   forcePoints: Sequelize.INTEGER
// }, {
//   // disable the modification of tablenames; By default, sequelize will automatically
//   // transform all passed model names (first parameter of define) into plural.
//   // if you don't want that, set the following
//   freezeTableName: true
// });


// Burger.sync();
// module.exports = Burger;