const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

const app = express();

const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "slike");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("slika")
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

app.use("/slike", express.static(path.join(__dirname, "slike")));

const appRoutes = require("./routes/routes");
const adminRoutes = require("./routes/admin");
const sequelize = require("./utils/database");

app.use(appRoutes);
app.use("/admin", adminRoutes);
app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server runs at port: 3000");
});
