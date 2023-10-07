const database = require("../database");
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const router = require("express").Router()

const usersModels = require('../models/users')


// end point user

//get all user


// end point user
// end point /users -> for get data user except password and email
// end point /users/me -> for get all data with password and email
// end point users/register -> for post data user, it must with password encryption
// end point users/login -> for acces detail data with token JWT(json web token)
// end point users/edit -> for edit data with encrypton after login with JWT




//middle ware for GET DETAIL USER by token
const checkJWT = async (req,res,next) =>{
    try {
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the front jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN)
      console.log("decoded", decoded)
      
      if (decoded) { // if decode succes next to execution function
        next()
      }
      
    } catch (error) {
      res.status(401).json({
        status : false,
        massage : "token error",
      })
    }
  }

  //get all user

router.get("/users", async (req, res) => {
    try {
      const request = await usersModels.getAlluser()
      // id, email and pass is privacy, so dont call on this endpoint
      res.json({
        status : true,
        massage : "Get data user suscces",
        data : request
      });
    } catch (error) {
      res.json({
        status : false,
        massage : "something wron in server",
        data : []
      });
    }
  })
  
  //users/register (post user)
  
router.post("/users", async (req, res) => {
  
    try {
      
    const {
        first_name,
        last_name,
        phone_number,
        email,
        password,
        photo_profile
      } = req.body
  
      //validation input must fill data correctly and completed
      const isInputValid = first_name &&
      last_name&&
      phone_number&&
      email&&
      password&&
      photo_profile;
  
      if (!isInputValid) {
        res.json({
          status : false,
          massage : "please maksure data completely",
        });
        return;
      } 
  
      //validation for checking email, for prevent same email or duplicate email
      const checkEmail = await usersModels.checkEmail(email)
  
      if (checkEmail.length > 0) {
        res.status(400).json({
          status : "false",
          massage : "Email has already register",
        })
          return;
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
  
      if (request.length>0) {
        res.json({
          status : true,
          massage : "Post data success",
          data : request
        });
      } else {
        res.json({
          status : false,
          massage : "Fail to post data"
        });
      }
      
    } catch (error) {
      res.json({
        status : false,
        massage : "something wron in server",
        data : console.log(error)
      })
    }
  
  })



  
  // LOGIN User, check by email and passwor
  //make Token with JWT 
  
  router.post("/users/login", async (req, res) => {
  try {
    
    const {email,password} =req.body
    
    //check if email registered
    const checkEmail = await usersModels.checkEmail(email);
  
    // validation if email not registered
    if (checkEmail.length == 0) {
      res.status(404).json({
        status : "false",
        massage : "Data email not found",
      })
      return;
    }
  
     //check if password correct
    const isMatch = bcrypt.compareSync(password, checkEmail[0].password);
  
    if (isMatch) {
      const token = jwt.sign(checkEmail[0], process.env.APP_SECRET_TOKEN); //make token and return data credential by email
      res.status(200).json({
        status : "True",
        massage : "Login succes",
        accesToken : token
      })
    }else{
      res.status(400).json({
        status : "flase",
        massage : "Password incorrect",
    })
  }
  
  
  
  } catch (error) {
    res.status(500).json({
      status : "False",
      massage : "Something wrong in server"
    })
  }
  })
  
  
  // GET Detail User
  
  router.get("/users/me", checkJWT, async (req, res) => {
  
    try {
  
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the front jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN) //verify the token with env jwt
      const request = await usersModels.getDetailUser(decoded) //get data bye token id
  
      res.json({
        status : "true",
        massage :"get data succes",
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
  
  // Edit User
  
  router.put("/users/edit/", checkJWT, async (req, res) => {
    try {
  
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the front jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN) //verify the token with env jwt
  
      const {id} = decoded;
      
      const {
          first_name,
          last_name,
          phone_number,
          email,
          photo_profile
        } = req.body
  
    
        //validation input must fill data correctly and completed
        const isInputValid = first_name &&
        last_name&&
        phone_number&&
        email&&
        photo_profile;
    
        if (!isInputValid) {
          res.json({
            status : false,
            massage : "please maksure data completely",
          });
          return;
        } 
  
  
    
      const request = await usersModels.editUser(id,{first_name,
        last_name,
        phone_number,
        email,
        photo_profile})
  
        res.status(200).json({
          status : "true",
          massage : "Update data success"
        })
  
  
  } catch (error) {
    res.status(500).json({
      status : "false",
      massage : "Error in server",
      data : console.log(error)
    })
  }
      
  
  
  
  })
  
  
  // Edit password
  
  router.put("/users/edit/password/", checkJWT, async (req, res) => {
    try {
  
      const token = req.headers.authorization.slice(7) // get token from authoriztion and slice 7 string in the front jwt
      const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN) //verify the token with env jwt
      const {id} = decoded;
      
      const {
          password
        } = req.body
  
    
        //validation input must fill data correctly and completed
        const isInputValid = password
    
        if (!isInputValid) {
          res.json({
            status : false,
            massage : "please maksure data completely",
          });
          return;
        } 
  
    // this 3 variable is for encryption password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt); //password is from deconstruction parameter
  
    
      const request = await usersModels.editPassword(id,hash) //get data bye token id
  
        res.status(200).json({
          status : "true",
          massage : "Update data success"
        })
  
  
  } catch (error) {
    res.status(500).json({
      status : "false",
      massage : "Error in server"
    })
  }
  
  
  })
  
  module.exports = router;