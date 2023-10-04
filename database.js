const postgres = require("postgres");

const sql = postgres({
    host : process.env.PG_HOST,
    user : process.env.PG_USER,
    pass : process.env.PG_PASS,
    database : process.env.PG_DB,
    port : process.env.PG_PORT,
}); // will use psql environment variables

module.exports = sql;