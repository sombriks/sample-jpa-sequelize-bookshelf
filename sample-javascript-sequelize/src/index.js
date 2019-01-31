// index.js
const {Party} = require("./model/Party");
const {Person} = require("./model/Person");
const {PartyType} = require("./model/PartyType");
const {PartyStatus} = require("./model/PartyStatus");

Party.findAll({
  include: [{model: Person, as: "hoster"}, {model: PartyType, as: "type"}, {model: PartyStatus, as: "status"}],
}).then(ret => console.log(ret));
