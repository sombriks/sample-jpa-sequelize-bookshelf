// model/Person.js
const Sequelize = require("sequelize");
const {sequelize} = require("../db");

exports.Person = sequelize.define(
  "Person",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "person_id",
    },
    creation: {
      type: Sequelize.DATE,
      field: "person_creation",
    },
    name: {
      type: Sequelize.STRING,
      field: "person_name",
    },
  },
  {tableName: "person", timestamps: false},
);
