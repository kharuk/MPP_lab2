const Sequelize = require("sequelize");

const connection = new Sequelize('cinema_db', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = connection;

