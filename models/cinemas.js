const database = require("../database");

const modelCinemas = {
    getAllcinemas : async()=>{
        const request = await database `SELECT * FROM cinemas`
        return request;
    },

    getSelectedCinemas : async(id)=>{
        request = await database `SELECT * FROM cinemas where id = ${id}`
        return request;
    },


    postCinemas : async(payload)=>{

        const {
            movie_id,
            name,
            city,
            address,
            show_times,
            price,
            logo
          } = payload;

        const request = await database `INSERT INTO cinemas(movie_id,name,city,address,show_times,price,logo)
        VALUES(${movie_id},${name},${city},${address},${show_times},${price},${logo}) RETURNING id `;

        return request;
    },

    
    editCinemas : async(id,payload)=>{

        const{movie_id,
            name,
            city,
            address,
            show_times,
            price,
            logo} = payload;

        const request = await database `UPDATE cinemas
        SET movie_id = ${movie_id},
            name = ${name},
            city =${city},
            address =${address},
            show_times = ${show_times},
            price = ${price},
            logo = ${logo}
        WHERE id = ${id};`
        return request;
    },

    
    deleteCinemas : async(id)=>{
    
        const request = await database `DELETE FROM cinemas WHERE id = ${id};`
     
        return request;
    },


}

module.exports = modelCinemas;