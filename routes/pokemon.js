const express = require("express");
const router = express.Router();
let pokemonData = require("../data/pokemon.json");

router.route("/pokemon").get((req, res) => {
  res.status(200).json(pokemonData);
});

module.exports = router;
