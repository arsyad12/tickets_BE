/* eslint-disable camelcase */
// import model for database query
const modelMovies = require('../models/movies')

const Joi = require('joi')

// node-input-validator for make validattion input

const movieController = {
  _getAllmovies: async (req, res) => {
    try {
      // call the method for run query database from modelMovie
      const request = await modelMovies.getAllmovies()

      res.json({
        status: true,
        massage: 'get data succes',
        data: request
      })
    } catch (error) {
      res.status(502).json({
        status: false,
        massage: 'something wrong in server',
        data: []
      })
    }
  },

  _getSelectedMovie: async (req, res) => {
    try {
      const { id } = req.params
      // call the method for run query database from modelMovie by id parameter
      const request = await modelMovies.getSelectedMovie(id)

      res.json({
        status: true,
        massage: 'get data succes',
        data: request
      })
    } catch (error) {
      res.status(502).json({
        status: false,
        massage: 'something wrong in server',
        data: []
      })
    }
  },

  _postMoive: async (req, res, next) => {
    try {
      const userSchema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        realese_date: Joi.date().required(),
        duration: Joi.string().allow(''),
        genres: Joi.array().items(Joi.string().min(5).max(20).allow('')),
        directed_by: Joi.string().allow(''),
        casts: Joi.array().items(Joi.string().min(2).max(30).allow('')),
        synopsis: Joi.string().allow(''),
        posters: Joi.string().uri().allow('')
      })

      await userSchema.validateAsync(req.body)

      const {
        name,
        realese_date,
        duration,
        genres,
        directed_by,
        casts,
        synopsis,
        posters
      } = req.body

      // console.log(req.body); for checking data received in express
      console.log(req.body)
      const request = await modelMovies.postMovies({
        // send parameter for models postMovies
        name,
        realese_date,
        duration,
        genres,
        directed_by,
        casts,
        synopsis,
        posters
      })

      if (request.length > 0) {
        res.json({
          status: true,
          massage: 'insert data succes'
        })
      } else {
        res.json({
          status: false,
          massage: 'Fail to post data'
        })
      }
    } catch (error) {
      next(error)
    }
  },

  _updateMovie: async (req, res) => {
    try {
      const { id } = req.params

      const {
        name,
        realese_date,
        duration,
        genres,
        directed_by,
        casts,
        synopsis,
        posters
      } = req.body

      const request = await modelMovies.editMovies(
        {
          name,
          realese_date,
          duration,
          genres,
          directed_by,
          casts,
          synopsis,
          posters
        },
        id
      )

      res.status(200).json({
        status: 'Succes',
        massage: 'Update data succes',
        data: request
      })
    } catch (error) {
      res.status(502).json({
        status: 'Error',
        massage: 'Something wrong in server'
      })
    }
  },

  _deleteMovie: async (req, res) => {
    try {
      const { id } = req.params

      const request = await modelMovies.deleteMovie(id)

      res.status(200).json({
        status: 'success',
        massage: 'Delete data success',
        data: request
      })
    } catch (error) {
      res.status(502).json({
        status: 'Error',
        massage: 'Something Wrong in Server'
      })
    }
  }
}

module.exports = movieController
