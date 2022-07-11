const { Router } = require("express");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/dogadjaji", (req, res) => {
  res.render("dogadjaji");
});
router.get("/muzika", (req, res) => {
  res.render("muzika");
});
router.get("/podkesti", (req, res) => {
  res.render("podkesti");
});
router.get("/saradnja", (req, res) => {
  res.render("saradnja");
});
router.get("/o_nama", (req, res) => {
  res.render("onama");
});
router.get("/dogadjaji_stranica", (req, res) => {
  res.render("stranicaZaDogadjaje");
});
router.get("/autori_stranica", (req, res) => {
  res.render("stranicaZaIzvodjace");
});

module.exports = router;
