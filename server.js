const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/forest_controller.js");

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT);