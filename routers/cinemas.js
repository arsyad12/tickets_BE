const router = require("express").Router()
//import controllers to get response and request
const cinemaController = require('../controllers/cinemas')


// end point cinemas

// get all cinemas
router.get("/cinemas", cinemaController._getAllcinemas)
  
  // get selected id cinemas
  router.get("/cinemas/:id", cinemaController._getSelectedCinemas)
  
  // post cinemas
  router.post("/cinemas", cinemaController._postCinemas)
  
  // update cinemas
  
  router.put("/cinemas/:id", cinemaController._editCinemas)
  
  // delete cinemas
  
  router.delete("/cinemas/:id", cinemaController._deleteCinemas)
  

  module.exports = router;