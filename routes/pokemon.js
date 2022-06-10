const express = require("express");
const router = express.Router();
let pokemonData = require("../data/pokemon.json");

router.route("/pokemon").get((req, res) => {
  res.status(200).json(pokemonData);
});

router.route("/pokemon/random").get((req, res) => {
  randomPok = pokemonData[Math.floor(Math.random() * (pokemonData.length - 1))];
  res.status(200).json(randomPok);
});
module.exports = router;
