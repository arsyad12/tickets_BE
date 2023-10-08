
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const router = require("express").Router()


//import controller for get response or requesst

const userController = require('../controllers/users');



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

router.get("/users", userController._getAlluser)
  
  //users/register (post user)
  
router.post("/users", userController._registerUser)



  
  // LOGIN User, check by email and passwor
  //make Token with JWT 
  
  router.post("/users/login", userController._userLogin )
  
  
  // GET Detail User
  
  router.get("/users/me", checkJWT, userController._getDetailUser)
  
  // Edit User
  
  router.put("/users/edit/", checkJWT, userController._editUser)
  

  // Edit password
  
  router.put("/users/edit/password/", checkJWT,userController._editPassword)
  
  module.exports = router;