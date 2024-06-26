const { getPokeApiData } = require("./poke-api");
const { sortAbilities, formatData } = require("./utils/pokemon-utils");

exports.getPokemonData = async (req, res) => {
  const normalizedName = req.params.name.toLowerCase();

  const pokeApiData = await getPokeApiData(normalizedName);
  if (pokeApiData.status === 404) {
    res.status(404).send("Pokémon doesn't exist or was spelled incorrectly!");
    return;
  }

  const sortedAbilities = sortAbilities(pokeApiData?.data?.abilities);
  const data = formatData(pokeApiData, sortedAbilities);

  res.send(data);
};
