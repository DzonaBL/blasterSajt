const { Router } = require("express");
const express = require("express");

const controller = require("../controllers/admin");

const router = express.Router();

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.post("/izvodjac", controller.postIzvodjac);

router.post("/dogadjaj", controller.postDogadjaj);

router.post("/podkest", controller.postPodkest);

module.exports = router;
