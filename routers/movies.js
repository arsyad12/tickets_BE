const database = require("../database");
const router = require("express").Router()


//in router.get we can use for write the rest API
// endpoint movies is for called all data wee needed from table movies
router.get("/movies", async (req, res) => {
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
  
  router.get("/movies/:id", async (req, res) => {
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
  
  router.post("/movies", async (req, res) => {
    try {
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
      
      const isInputValid =  name&&
      realese_date&&
      duration&&
      genres&&
      directed_by&&
      casts&&
      synopsis&&
      posters;
  
      if (!isInputValid) {
        res.json({
          status: false,
          massage: "please make sure input completed",
        });
      } else {
        
      }
  
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
          massage: "Fail to post data",
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
  
  
  // update movies
  
  router.put("/movies/:id", async (req, res) => {
    const {id} = req.params
    const { name,
      realese_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      posters} = req.body
    
      try {
      const request = await database `UPDATE movies
      SET  name = ${name},
      realese_date = ${realese_date},
      duration = ${duration},
      genres = ${genres},
      directed_by = ${directed_by},
      casts = ${casts},
      synopsis = ${synopsis},
      posters = ${posters}
      WHERE id = ${id};`
  
      res.status(200).json({
          status : "Succes",
          massage : "Update data succes",
  
      });
  
    } catch (error) {
      res.status(502).json({
        status : "Error",
        massage : "Something wrong in server",
    });
    }
  })
  
  
  // delete movies
  
  router.delete("/movies/:id", async (req, res) => {
  const {id} = req.params
  
  try {
    const request = await database `DELETE FROM movies WHERE id = ${id}`
    
    res.status(200).json({
      status : "success",
      massage : "Delete data success"
    })
  
  } catch (error) {
    res.status(502).json({
      status : "Error",
      massage : "Something Wrong in Server"
    })
  }
  
  })
  
  module.exports = router;