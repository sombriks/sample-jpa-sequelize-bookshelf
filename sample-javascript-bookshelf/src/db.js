// db.js
const knex = require("knex")({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: 5432,
    database : 'my_party_schema',
    user : 'postgres',
    password : 'postgres',
  }
});
exports.Bookshelf = require("bookshelf")(knex);
