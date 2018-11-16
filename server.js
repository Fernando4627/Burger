const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");//AKA lovehandles

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let routes = require("./controllers/router.js");
let burgerRoutes = require("./controllers/burger_controller.js");