const { axios } = require("./axios/axios");

exports.getPokeApiData = function (name) {
  return axios
    .get(`/pokemon/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
};
