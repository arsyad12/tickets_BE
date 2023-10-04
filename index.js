const express = require("express");
const app = express();
require('dotenv').config();
const database = require("./database");
const { request } = require("http");
let port = process.env.PORT;
const bcrypt = require('bcrypt'); 



//for give acces receive data in express from outside
app.use(express.urlencoded({ extended: false }));
//for tell the express the data is json
app.use(express.json());

//in app.get we can use for write the rest API
// endpoint movies is for called all data wee needed from table movies
app.get("/movies", async (req, res) => {
  try {
    const request =
      await database`SELECT id, name, duration, genres, posters FROM movies`;
    res.json({
      status: true,
      massage: "get data succes",
      data: request,
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      massage: "something wrong in server",
      data: [],
    });
  }
});

// endpoint movies/:id is for call data from selected id in table movies

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const request = await database`SELECT * FROM movies WHERE id = ${id}`;
    res.json({
      status: true,
      massage: "get data succes",
      data: request,
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      massage: "something wrong in server",
      data: [],
    });
  }
});

// endpoint post movies is for insert data to table movies

app.post("/movies", async (req, res) => {
  try {
    const {
      name,
      realese_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      posters,
    } = req.body;
    
    const isInputValid =  name&&
    realese_date&&
    duration&&
    genres&&
    directed_by&&
    casts&&
    synopsis&&
    posters;

    if (!isInputValid) {
      res.json({
        status: false,
        massage: "please make sure input completed",
      });
    } else {
      
    }

    // console.log(req.body); for checking data received in express
    const request = await database`INSERT INTO movies(name,realese_date,duration,genres,directed_by,casts,synopsis,posters)
    values(${name},${realese_date},${duration},${genres},${directed_by},${casts},${synopsis},${posters}) RETURNING id`;

    if (request.length>0) {
        res.json({
        status: true,
        massage: "insert data succes",
      });
    } else {
      res.json({
        status: false,
        massage: "Fail to post data",
      });
    }

    
  } catch (error) {
    res.status(502).json({
      status: false,
      massage: "something wrong in server",
      data: [],
    });
  }
});


// update movies

app.put("/movies/:id", async (req, res) => {
  const {id} = req.params
  const { name,
    realese_date,
    duration,
    genres,
    directed_by,
    casts,
    synopsis,
    posters} = req.body
  
    try {
    const request = await database `UPDATE movies
    SET  name = ${name},
    realese_date = ${realese_date},
    duration = ${duration},
    genres = ${genres},
    directed_by = ${directed_by},
    casts = ${casts},
    synopsis = ${synopsis},
    posters = ${posters}
    WHERE id = ${id};`

    res.status(200).json({
        status : "Succes",
        massage : "Update data succes",

    });

  } catch (error) {
    res.status(502).json({
      status : "Error",
      massage : "Something wrong in server",
  });
  }
})


// delete movies

app.delete("/movies/:id", async (req, res) => {
const {id} = req.params

try {
  const request = await database `DELETE FROM movies WHERE id = ${id}`
  
  res.status(200).json({
    status : "success",
    massage : "Delete data success"
  })

} catch (error) {
  res.status(502).json({
    status : "Error",
    massage : "Something Wrong in Server"
  })
}

})





// end point cinemas

// get all cinemas
app.get("/cinemas", async (req, res) => {
  try {

   const request = await database `SELECT * FROM cinemas`

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
app.get("/cinemas/:id", async (req, res) => {

  try {

    const {id} = req.params

    request = await database `SELECT * FROM cinemas where id = ${id}`

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
app.post("/cinemas", async (req, res) => {
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
  } else {
    
  }

  const request = await database `INSERT INTO cinemas(movie_id,name,city,address,show_times,price,logo)
    VALUES(${movie_id},${name},${city},${address},${show_times},${price},${logo}) RETURNING id `;

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

app.put("/cinemas/:id", async (req, res) => {

  const {id} = req.params

  const { movie_id,
    name,
    city,
    address,
    show_times,
    price,
    logo} = req.body

    try {

      const request = await database `UPDATE cinemas
      SET movie_id = ${movie_id},
          name = ${name},
          city =${city},
          address =${address},
          show_times = ${show_times},
          price = ${price},
          logo = ${logo}
      WHERE id = ${id};`

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

app.delete("/cinemas/:id", async (req, res) => {
  const {id} = req.params

  try {
    const request = await database `DELETE FROM cinemas
    WHERE id = ${id};`
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





// end point user

//get all user




// end point user
// end point /users -> for get data user except password and email
// end point /users/me -> for get all data with password and email
// end point users/register -> for post data user, it must with password encryption
// end point users/login -> for acces data with token JWT(json web token)
// end point users/edit -> for edit data with encrypton after login with JWT

//get all user

app.get("/users", async (req, res) => {
  try {
    const request = await database `SELECT first_name,last_name,phone_number,photo_profile FROM users`
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

app.post("/users", async (req, res) => {

  try {
    
  const {
      first_name,
      last_name,
      phone_number,
      email,
      password,
      photo_profile
    } = req.body

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
    } else {
      
    }

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
      data : []
    })
  }

})

// update user

app.post("/cinemas:id", async (req, res) => {

})


// delete user

app.post("/cinemas", async (req, res) => {

})



app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})
