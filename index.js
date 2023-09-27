const express = require('express');
const app = express();
const port = 3000;
const database = require("./database");

//in app.get we can use for write the rest API
app.get('/movies', (req, res) => {
  const request = database`SELECT * FROM movies`;
  console.log(request);
});

app.get('/movies/:id', (req, res) => {
  res.send('Pijar CamP');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});