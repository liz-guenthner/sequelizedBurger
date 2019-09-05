module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return User;
}
// This is a sequelize model.
// This model exports a function that take in 2 variables
// (sequelize, DataTypes)
// These are provided by index.js
// sequelize is the connection to the db
// DataTypes defines what type of data each property on model will be
// Inside function, run "sequelize.define" method
// pass in 2 arguments
// 1. "User" - name of model as a string
// 2. object describing the model's schema
// (these are columns in the db table)
// "sequelize.define" returns an object stored inside "User" variable
// return variable "User" on line 6