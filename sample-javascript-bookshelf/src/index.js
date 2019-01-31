// index.js
const {Party} = require("./model");

Party
  .fetchAll({withRelated: ["hoster", "type", "status"]})
  .then(ret => console.log(ret.serialize()));
