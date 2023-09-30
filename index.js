const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

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
        massage: "please make sure input completed",
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

  const request = await database `INSERT INTO cinemas(movie_id,name,city,address,show_times,price,logo)
    VALUES(${movie_id},${name},${city},${address},${show_times},${price},${logo}) RETURNING id `;

    if (request.length>0) {
      res.json({
        status : true,
        massage : "post data succes",
      })
    } else {
      console.log(error)
    }
  
} catch (error) {
  res.json({
    status : false,
    massage : "error in server",
    data : []
  })
}

})


// end point user

//get all user

app.get("/users", async (req, res) => {
  try {
    const request = await database `SELECT * FROM users`
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

//get selected user

app.get("/users/:id", async (req, res) => {
  try {

    const{id} = req.params;

    const request = await database `SELECT * FROM users WHERE id = ${id}`

    res.json({
      status : true,
      massage : "Get Selected User Succes",
      data : request
    });
    
  } catch (error) {
    res.json({
      status : false,
      massage : "Something wrong in server",
      data : []
    });
  }
})

//post user

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
      ${password},
      ${photo_profile}
    ) RETURNING id`;


    if (request.length>0) {
      res.json({
        status : true,
        massage : "Post data success",
        data : request
      })
    } else {
      console.log("please fill data completely")
    }
    
  } catch (error) {
    res.json({
      status : false,
      massage : "something wron in server",
      data : []
    })
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
