const Sequelize = require("sequelize");
const db = require("../db");

const Collection = db.define("collection", {
  collection: {
    type: Sequelize.INTEGER,
  },
  img: {
    type: Sequelize.STRING,
  },
  inscription: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
});

module.exports = Collection;
