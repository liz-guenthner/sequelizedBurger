// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
=======


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs(
    {
      defaultLayout: "main"
    }
));

app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
>>>>>>> 5c89e7b1067ac6b734180e6eb7875686adf84ccf

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
