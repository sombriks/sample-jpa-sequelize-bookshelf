// model/Party.js
const Sequelize = require("sequelize");
const {sequelize} = require("../db");
const {Person} = require("./Person");
const {PartyType} = require("./PartyType");
const {PartyStatus} = require("./PartyStatus");

exports.Party = sequelize.define(
  "Party",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "party_id",
    },
    creation: {
      type: Sequelize.DATE,
      field: "party_creation",
    },
    title: {
      type: Sequelize.STRING,
      field: "party_title",
    },
  },
  {tableName: "party", timestamps: false},
);
exports.Party.hasOne(Person, {as: "hoster", foreignKey: "person_id"});
exports.Party.hasOne(PartyType, {as: "type", foreignKey: "party_type_id"});
exports.Party.hasOne(PartyStatus, {as: "status", foreignKey: "party_status_id"});
