const movieErrHandler = {
  getErr: (err, req, res, next) => {
    if (err) {
      if (err.message.includes('length must be less than or equal')) {
        res.status(422).json({
          status: false,
          massage: err.message
        })
      }
    } else {
      res.status(502).json({
        status: false,
        massage: err.message
      })
    }
  }
}

module.exports = movieErrHandler
