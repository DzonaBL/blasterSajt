const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

const appRoutes = require("./routes/routes");
app.use(appRoutes);

app.listen(3000, () => {
  console.log("Server runs at port: 3000");
});
