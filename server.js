var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var routes = require("./controllers/burgers_controller");
// listen on port 3000
var PORT = process.env.PORT || 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
