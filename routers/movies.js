const database = require("../database");
const router = require("express").Router()

// import model for database query

const  modelMovies = require('../models/movies')


//in router.get we can use for write the rest API
// endpoint movies is for called all data wee needed from table movies
router.get("/movies", async (req, res) => {
    try {
      //call the method for run query database from modelMovie
      const request = await modelMovies.getAllmovies()
        
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
    try {
      const { id } = req.params; 
      //call the method for run query database from modelMovie by id parameter
      const request = await modelMovies.getSelectedMovie(id);

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
      const request = await modelMovies.postMovies({ //send parameter for models postMovies
        name,
        realese_date,
        duration,
        genres,
        directed_by,
        casts,
        synopsis,
        posters,
      });
  
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
    try {
    
    const {id} = req.params

      const { name,
      realese_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      posters} = req.body
    
      
      const request = await modelMovies.editMovies({name,
        realese_date,
        duration,
        genres,
        directed_by,
        casts,
        synopsis,
        posters},id)

      res.status(200).json({
          status : "Succes",
          massage : "Update data succes",
          data : request
  
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
  
  try {
    const {id} = req.params

    const request = await modelMovies.deleteMovie(id)
    
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