/* eslint-disable camelcase */
// import model for acces database
const usersModels = require('../models/users')
// import jwt for make token
const jwt = require('jsonwebtoken')
// import bcrypt for compare password from user with database
const bcrypt = require('bcrypt')

const userController = {

  _getAlluser: async (req, res) => {
    try {
      const request = await usersModels.getAlluser()
      // id, email and pass is privacy, so dont call on this endpoint
      res.json({
        status: true,
        massage: 'Get data user suscces',
        data: request
      })
    } catch (error) {
      res.json({
        status: false,
        massage: 'something wron in server',
        data: []
      })
    }
  },

  _registerUser: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        phone_number,
        email,
        password,
        photo_profile
      } = req.body

      // validation input must fill data correctly and completed
      const isInputValid = first_name &&
          last_name &&
          phone_number &&
          email &&
          password &&
          photo_profile

      if (!isInputValid) {
        res.json({
          status: false,
          massage: 'please maksure data completely'
        })
        return
      }

      // validation for checking email, for prevent same email or duplicate email
      const checkEmail = await usersModels.checkEmail(email)

      if (checkEmail.length > 0) {
        res.status(400).json({
          status: 'false',
          massage: 'Email has already register'
        })
        return
      }

      const request = await usersModels.registerUser({
        first_name,
        last_name,
        phone_number,
        email,
        password,
        photo_profile
      })
      // the password values, change with hash because we need value encryption password from hash

      if (request.length > 0) {
        res.json({
          status: true,
          massage: 'Post data success',
          data: request
        })
      } else {
        res.json({
          status: false,
          massage: 'Fail to post data'
        })
      }
    } catch (error) {
      res.json({
        status: false,
        massage: 'something wron in server',
        data: console.log(error)
      })
    }
  },

  _userLogin: async (req, res) => {
    try {
      const { email, password } = req.body

      // check if email registered
      const checkEmail = await usersModels.checkEmail(email)

      // validation if email not registered
      if (checkEmail.length === 0) {
        res.status(404).json({
          status: 'false',
          massage: 'Data email not found'
        })
        return
      }

      // check if password correct
      const isMatch = bcrypt.compareSync(password, checkEmail[0].password)

      if (isMatch) {
        const token = jwt.sign(checkEmail[0], process.env.APP_SECRET_TOKEN) // make token and return data credential by email
        res.status(200).json({
          status: 'True',
          massage: 'Login succes',
          accesToken: token
        })
      } else {
        res.status(400).json({
          status: 'flase',
          massage: 'Password incorrect'
        })
      }
    } catch (error) {
      res.status(500).json({
        status: 'False',
        massage: 'Something wrong in server'
      })
    }
  },

  _getDetailUser: async (req, res) => {
    try {
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the front jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN) // verify the token with env jwt
      const request = await usersModels.getDetailUser(decoded) // get data bye token id

      res.json({
        status: 'true',
        massage: 'get data succes',
        data: request
      })
    } catch (error) {
      res.json({
        status: false,
        massage: 'something wron in server',
        data: []
      })
    }
  },

  _editUser: async (req, res) => {
    try {
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the front jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN) // verify the token with env jwt

      const { id } = decoded

      const {
        first_name,
        last_name,
        phone_number,
        email,
        photo_profile
      } = req.body

      // validation input must fill data correctly and completed
      const isInputValid = first_name &&
            last_name &&
            phone_number &&
            email &&
            photo_profile

      if (!isInputValid) {
        res.json({
          status: false,
          massage: 'please maksure data completely'
        })
        return
      }

      const request = await usersModels.editUser(id, {
        first_name,
        last_name,
        phone_number,
        email,
        photo_profile
      })

      res.status(200).json({
        status: 'true',
        massage: 'Update data success',
        data: request
      })
    } catch (error) {
      res.status(500).json({
        status: 'false',
        massage: 'Error in server',
        data: console.log(error)
      })
    }
  },

  _editPassword: async (req, res) => {
    try {
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the fronm jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN) // verify the token with env jwt
      const { id } = decoded

      const {
        password
      } = req.body

      // validation input must fill data correctly and completed
      const isInputValid = password

      if (!isInputValid) {
        res.json({
          status: false,
          massage: 'please maksure data completely'
        })
        return
      }

      // this 3 variable is for encryption password
      const saltRounds = 10
      const salt = bcrypt.genSaltSync(saltRounds)
      const hash = bcrypt.hashSync(password, salt) // password is from deconstruction parameter

      const request = await usersModels.editPassword(id, hash) // get data bye token id

      res.status(200).json({
        status: 'true',
        massage: 'Update data success',
        data: request
      })
    } catch (error) {
      res.status(500).json({
        status: 'false',
        massage: 'Error in server'
      })
    }
  }
}

module.exports = userController
