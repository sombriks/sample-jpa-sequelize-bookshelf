// db.js
const Sequelize = require("sequelize");
exports.sequelize = new Sequelize("postgres://postgres:postgres@127.0.0.1:5432/my_party_schema");
