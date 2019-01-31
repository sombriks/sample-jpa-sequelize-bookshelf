// model.js
const {Bookshelf} = require("./db");

const Person = Bookshelf.Model.extend({
  tableName: "person",
  idAttribute: "person_id",
});

const PartyStatus = Bookshelf.Model.extend({
  tableName: "party_status",
  idAttribute: "party_status_id",
});

const PartyType = Bookshelf.Model.extend({
  tableName: "party_type",
  idAttribute: "party_type_id",
});

const Party = Bookshelf.Model.extend({
  tableName: "party",
  idAttribute: "party_id",
  hoster() {
    return this.belongsTo(Person, "person_id");
  },
  status() {
    return this.belongsTo(PartyStatus, "party_status_id");
  },
  type() {
    return this.belongsTo(PartyType, "party_type_id");
  },
});

const InviteStatus = Bookshelf.Model.extend({
  tableName: "invite_status",
  idAttribute: "invite_status_id",
});

const InviteType = Bookshelf.Model.extend({
  tableName: "invite_type",
  idAttribute: "invite_type_id",
});

const Invite = Bookshelf.Model.extend({
  tableName: "invite",
  idAttribute: "invite_id",
  person() {
    return this.belongsTo(Person, "person_id");
  },
  party() {
    return this.belongsTo(Party, "party_id");
  },
  status() {
    return this.belongsTo(InviteStatus, "invite_status_id");
  },
  type() {
    return this.belongsTo(InviteType, "invite_type_id");
  },
});

module.exports = {Person, PartyStatus, PartyType, Party, InviteStatus, InviteType, Invite};
