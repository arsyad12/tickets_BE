const database = require("../database");
const router = require("express").Router()
const modelCinemas = require('../models/cinemas')

// end point cinemas

// get all cinemas
router.get("/cinemas", async (req, res) => {
    try {
  
     const request = await modelCinemas.getAllcinemas();
  
     res.json({
        status : true,
        massage : "Get data succes",
        data : request
     })
  
      
    } catch (error) {
      res.json({
        status : false,
        massage : "something wron in server",
        data : []
      })
    }
  })
  
  // get selected id cinemas
  router.get("/cinemas/:id", async (req, res) => {
  
    try {
  
      const {id} = req.params
  
      request = await modelCinemas.getSelectedCinemas(id)
  
      res.json({
        status : true,
        massage : "get selected id done",
        data : request
      })
  
  
      
    } catch (error) {
      res.json({
        status : false,
        massage : "something wrong in server",
        data : []
      })
    }
  
  })
  
  // post cinemas
  router.post("/cinemas", async (req, res) => {
  try {
  
    const {
      movie_id,
      name,
      city,
      address,
      show_times,
      price,
      logo
    } = req.body;
  
    const isInputValid = movie_id &&
    name&&
    city&&
    address&&
    show_times&&
    price&&
    logo;
  
    if (!isInputValid) {
      res.json({
        status : false,
        massage : "Please makesure input data completed",
      });
      return;
    } 
  
    const request = await modelCinemas.postCinemas(req.body);
  
      if (request.length>0) {
        res.json({
          status : true,
          massage : "post data succes",
        })
      } else {
        res.json({
          status : false,
          massage : "fail to post data",
        });
      }
    
  } catch (error) {
    res.json({
      status : false,
      massage : "somethin wrong in server",
      data : []
    })
  }
  
  })
  
  // update cinemas
  
  router.put("/cinemas/:id", async (req, res) => {
  
    const {id} = req.params
  
    const { movie_id,
      name,
      city,
      address,
      show_times,
      price,
      logo} = req.body
  
      try {
  
        const request = await modelCinemas.editCinemas(id,{movie_id,
          name,
          city,
          address,
          show_times,
          price,
          logo})
  
        res.status(200).json({
          status : "success",
          massage : "Update data success",
          data : request
        })
        
      } catch (error) {
      
        res.status(502).json({
          status : "False",
          massage : "Something wrong in server",
          data : request
        })
        
        
      }
  
  })
  
  
  // delete cinemas
  
  router.delete("/cinemas/:id", async (req, res) => {
    
    const {id} = req.params
  
    try {
      const request = await modelCinemas.deleteCinemas(id)
      
      res.status(200).json({
        status : "true",
        massage : "delete data succes",
      })
    } catch (error) {
      res.status(502).json({
        status : "false",
        massage : "something error in server",
      })
    }
  
  })
  

  module.exports = router;