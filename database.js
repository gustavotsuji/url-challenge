const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

exports.modules = {
  sequelize
}