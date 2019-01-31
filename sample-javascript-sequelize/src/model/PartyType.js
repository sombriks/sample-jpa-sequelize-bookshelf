// model/PartyType.js
const Sequelize = require("sequelize");
const {sequelize} = require("../db");

exports.PartyType = sequelize.define(
  "PartyType",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "party_type_id",
    },
    description: {
      type: Sequelize.STRING,
      field: "party_type_description",
    },
  },
  {tableName: "party_type", timestamps: false},
);
