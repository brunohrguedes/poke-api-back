const express = require("express");
const axios = require("axios");
require("dotenv").config();

const pokeApiUrl = process.env.POKE_API_URL;
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "A Pokémon API created to fetch Pokémon habilites and return them in alphabetical order"
  );
});

app.get("/api/pokemons/:name", async (req, res) => {
  const normalizedName = req.params.name.toLowerCase();

  const pokeApiResponse = await axios
    .get(`${pokeApiUrl}/pokemon/${normalizedName}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));

  const data = {
    name: pokeApiResponse.name,
    abilities: pokeApiResponse.abilities,
    frontSprite: pokeApiResponse.sprites.front_default,
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
