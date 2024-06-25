const { getPokeApiData } = require("./poke-api");

exports.getPokemonData = async (req, res) => {
  const normalizedName = req.params.name.toLowerCase();

  const response = await getPokeApiData(normalizedName);

  // Sort abilities array comparing ability objects names
  const sortedAbilities = response?.abilities?.sort((a, b) => {
    if (a.ability.name > b.ability.name) {
      return 1;
    }
    if (b.ability.name > a.ability.name) {
      return -1;
    }
    return 0;
  });

  const data = {
    name: response?.name,
    abilities: sortedAbilities,
    frontSprite: response?.sprites?.front_default,
  };

  res.send(data);
};
