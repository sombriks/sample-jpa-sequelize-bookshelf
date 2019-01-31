// model/PartyStatus.js
const Sequelize = require("sequelize");
const {sequelize} = require("../db");

exports.PartyStatus = sequelize.define(
  "PartyStatus",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "party_status_id",
    },
    description: {
      type: Sequelize.STRING,
      field: "party_status_description",
    },
  },
  {tableName: "party_status", timestamps: false},
);
