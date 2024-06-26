// Sort abilities array comparing ability objects names
exports.sortAbilities = (abilities) => {
  const sortedAbilities = abilities.sort((a, b) => {
    if (a.ability.name > b.ability.name) {
      return 1;
    }
    if (b.ability.name > a.ability.name) {
      return -1;
    }
    return 0;
  });

  return sortedAbilities;
};

exports.formatData = (pokeApiData, sortedAbilities) => {
  data = {
    name: pokeApiData?.data?.name,
    abilities: sortedAbilities,
    frontSprite: pokeApiData?.data?.sprites?.front_default,
  };

  return data;
};
