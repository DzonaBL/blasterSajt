const { Router } = require("express");
const express = require("express");
const isAuth = require("../middleware/isAuth");

const controller = require("../controllers/admin");

const router = express.Router();

router.get("/upload", isAuth, (req, res) => {
  res.render("upload");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/izvodjac", isAuth, controller.postIzvodjac);

router.post("/dogadjaj", isAuth, controller.postDogadjaj);

router.post("/podkest", isAuth, controller.postPodkest);

router.post("/login", controller.postLogin);

module.exports = router;
