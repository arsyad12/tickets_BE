/* eslint-disable camelcase */
const database = require('../database')

const modelMovies = {

  getAllmovies: async () => {
    const request = await database`SELECT * FROM movies`
    return request
  },

  getSelectedMovie: async (id) => { // id for get parameter from routes
    const request = await database`SELECT * FROM movies WHERE id = ${id}`
    return request
  },

  postMovies: async (payload) => {
    const {
      name,
      realese_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      posters
    } = payload // payload for get data from parameter in movies router

    const request = await database`INSERT INTO movies(name,realese_date,duration,genres,directed_by,casts,synopsis,posters)
      values(${name},${realese_date},${duration},${genres},${directed_by},${casts},${synopsis},${posters}) RETURNING id`

    return request
  },

  editMovies: async (payload, id) => {
    const {
      name,
      realese_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      posters
    } = payload

    const request = await database`UPDATE movies
          SET name = ${name},
          realese_date = ${realese_date},
          duration = ${duration},
          genres =${genres},
          directed_by =${directed_by},
          casts =${casts},
          synopsis=${synopsis},
          posters=${posters}
          WHERE id = ${id};`

    return request
  },

  deleteMovie: async (id) => {
    const request = await database`DELETE FROM movies WHERE id = ${id}`
    return request
  }

}

module.exports = modelMovies
