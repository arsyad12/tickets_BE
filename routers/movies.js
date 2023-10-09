const router = require('express').Router()

const movieController = require('../controllers/movies')

const movieErrHandler = require('../middleware/movieErrHandle')

// in router.get we can use for write the rest API
// endpoint movies is for called all data wee needed from table movies
router.get('/movies', movieController._getAllmovies)

// endpoint movies/:id is for call data from selected id in table movies

router.get('/movies/:id', movieController._getSelectedMovie)

// endpoint post movies is for insert data to table movies

router.post('/movies', movieController._postMoive, movieErrHandler.getErr)

// update movies

router.put('/movies/:id', movieController._updateMovie)

// delete movies

router.delete('/movies/:id', movieController._deleteMovie)

module.exports = router
