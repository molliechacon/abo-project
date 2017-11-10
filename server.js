// *** Dependencies
// =============================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Register a Handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Static directory
app.use(express.static(path.join(__dirname, "/app/public")));


// Routes
// =============================================================
require("./app/routes/donor-api-routes")(app);
require("./app/routes/inst-api-routes")(app);

app.get("/", function(req, res) {
  res.render("login");
});


// Starting our Express app
// =============================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

