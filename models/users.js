const database = require("../database");
const bcrypt = require('bcrypt'); 

const usersModels = {

    getAlluser : async()=>{

        const request = await database `SELECT first_name,last_name,phone_number,photo_profile FROM users`
        return request;
    },
    

    checkEmail :  async(email)=>{

       
    const checkEmail = await database `SELECT * FROM users WHERE email =${email}`

            return checkEmail;
            
    },

    
    registerUser : async(payload)=>{

         const {first_name,
            last_name,
            phone_number,
            email,
            password,
            photo_profile}= payload;

        // this 3 variable is for encryption password

      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt); //password is from deconstruction parameter

        const request = await database `INSERT INTO users( 
            first_name,
            last_name,
            phone_number,
            email,
            password,
            photo_profile) VALUES (
              ${first_name},
              ${last_name},
              ${phone_number},
              ${email},
              ${hash}, 
              ${photo_profile}
            ) RETURNING id`;

            return request;
    

    }



  
}

module.exports = usersModels;