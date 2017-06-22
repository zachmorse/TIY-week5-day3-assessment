const express = require("express");
const bodyParser = require("body-parser");

const mustacheExpress = require("mustache-express");
const app = express();
const port = process.env.PORT || 8080;

app.engine("mustache", mustacheExpress());
app.set("views", "./public");
app.set("view engine", "mustache");
var toDoList = [];

// MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES

app.use("/", express.static("./public"));

var todos = [];
var itemID = 0;
app.get("/", function(req, res) {
  res.render("index", { todos: todos });
});

app.post("/", function(req, res) {
  todos.push(req.body.listItem);
  res.redirect("/");
});

// LISTENER

app.listen(port, function(req, res) {
  console.log("Server running on port " + port);
});
