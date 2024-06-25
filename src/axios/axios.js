const axios = require("axios");
require("dotenv").config();

const pokeApiUrl = process.env.POKE_API_URL;

exports.axios = axios.create({
  baseURL: pokeApiUrl,
  timeout: 10000,
});
