const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "A Pokémon API created to fetch Pokémon habilites and return them in alphabetical order"
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
