const { axios } = require("./axios/axios");

exports.getPokeApiData = function (name) {
  return axios
    .get(`/pokemon/${name}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
