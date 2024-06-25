const express = require("express");
const { index } = require("./src/root");
const { getPokemonData } = require("./src/pokemon");

const app = express();
const port = 3000;

app.get("/", index);

app.get("/api/pokemons/:name", getPokemonData);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
