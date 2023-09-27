const postgres = require("postgres");

const sql = postgres({
    host : "localhost",
    user : "postgres",
    pass : "root",
    database : "tickets",
    port : 5432,
}); // will use psql environment variables

module.export = sql;