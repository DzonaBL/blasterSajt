const path = require("path");

const Autor = require("../models/Autor");
const Podkest = require("../models/Podkast");
const Dogadjaj = require("../models/Dogadjaj");

exports.postIzvodjac = (req, res, next) => {
  const ime = req.body.ime;
  const slika = req.file.path;
  const zanr = req.body.zanr;
  const biografija = req.body.biografija;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram;
  const soundcloud = req.body.soundcloud;
  const bandcamp = req.body.bandcamp;
  const youtube = req.body.youtube;

  Autor.create({
    ime,
    slika,
    zanr,
    biografija,
    facebook,
    instagram,
    soundcloud,
    bandcamp,
    youtube,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDogadjaj = (req, res, next) => {
  const naslov = req.body.naslov;
  const opis = req.body.opis;
  const slika = req.file.path;
  const tekst = req.body.tekst;
  const lokacija = req.body.lokacija;
  const vrijeme = req.body.vrijeme;

  Dogadjaj.create({ naslov, opis, slika, tekst, lokacija, vrijeme })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postPodkest = (req, res, next) => {
  const link = req.body.link;
  const naslov = req.body.naslov;
  const slika = req.file.path;

  Podkest.create({ link, naslov, slika })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
