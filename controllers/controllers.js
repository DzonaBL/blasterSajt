const path = require("path");

const Autor = require("../models/Autor");
const Podkest = require("../models/Podkast");
const Dogadjaj = require("../models/Dogadjaj");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getIzvodjaci = (req, res, next) => {
  Autor.findAll()
    .then((izvodjaci) => {
      res.render("izvodjaci", {
        data: izvodjaci,
        naslov: "izvodjaci",
        path: "/izvodjaci",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDogadjaji = (req, res, next) => {
  Dogadjaj.findAll()
    .then((dogadjaji) => {
      res.render("dogadjaji", {
        data: dogadjaji,
        naslov: "Dogadjaji",
        path: "/dogadjaji",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPodkesti = (req, res, next) => {
  Podkest.findAll()
    .then((podkesti) => {
      res.render("podkesti", {
        data: podkesti,
        naslov: "Podkesti",
        path: "/podkesti",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDogadjaj = (req, res, next) => {
  const dogId = req.params.id;
  Dogadjaj.findByPk(dogId)
    .then((dogadjaj) => {
      res.render("stranicaZaDogadjaje", {
        data: dogadjaj,
        naslov: "Dogadjaji",
        path: "/dogadjaji:id",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getIzvodjac = (req, res, next) => {
  const izvId = req.params.id;
  Autor.findByPk(izvId)
    .then((izvodjac) => {
      res.render("stranicaZaIzvodjace", {
        data: izvodjac,
        naslov: "Izvodjac",
        path: "/izvodjac:id",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
