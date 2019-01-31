// model/Invite.js
const Sequelize = require("sequelize");
const {sequelize} = require("../db");
const {Party} = require("./Party");
const {Person} = require("./Person");
const {InviteType} = require("./InviteType");
const {InviteStatus} = require("./InviteStatus");

exports.Invite = sequelize.define(
  "Invite",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "invite_id",
    },
    creation: {
      type: Sequelize.DATE,
      field: "invite_creation",
    },
  },
  {tableName: "invite", timestamps: false},
);
exports.Invite.hasOne(Party, {as: "party", foreignKey: "person_id"});
exports.Invite.hasOne(Person, {as: "person", foreignKey: "person_id"});
exports.Invite.hasOne(InviteType, {as: "type", foreignKey: "invite_type_id"});
exports.Invite.hasOne(InviteStatus, {as: "status", foreignKey: "invite_status_id"});
