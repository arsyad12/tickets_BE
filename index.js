const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

//for give acces receive data in express from outside
app.use(express.urlencoded({ extended: false }));
//for tell the express the data is json
app.use(express.json());

//in app.get we can use for write the rest API
// endpoint movies is for called all data wee needed from table movies
app.get("/movies", async (req, res) => {
  try {
    const request =
      await database`SELECT id, name, duration, genres, posters FROM movies`;
    res.json({
      status: true,
      massage: "get data succes",
      data: request,
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      massage: "something wrong in server",
      data: [],
    });
  }
});

// endpoint movies/:id is for call data from selected id in table movies

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const request = await database`SELECT * FROM movies WHERE id = ${id}`;
    res.json({
      status: true,
      massage: "get data succes",
      data: request,
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      massage: "something wrong in server",
      data: [],
    });
  }
});

// endpoint post movies is for insert data to table movies

app.post("/movies", async (req, res) => {
  try {
    // const request = await database`SELECT * FROM movies WHERE id = ${id}`;
    const {
      name,
      realese_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      posters,
    } = req.body;

    // console.log(req.body); for checking data received in express
    const request = await database`INSERT INTO movies(name,realese_date,duration,genres,directed_by,casts,synopsis,posters)
    values(${name},${realese_date},${duration},${genres},${directed_by},${casts},${synopsis},${posters}) RETURNING id`;

    if (request.length>0) {
        res.json({
        status: true,
        massage: "insert data succes",
      });
    } else {
      res.json({
        status: false,
        massage: "please make sure input completed",
      });
    }

    
  } catch (error) {
    res.status(502).json({
      status: false,
      massage: "something wrong in server",
      data: [],
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
