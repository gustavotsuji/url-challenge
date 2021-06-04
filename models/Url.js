const { Model, DataTypes, Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

class Url extends Model {}

Url.init({
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  countAccess: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0
  }
}, {
    sequelize, modelName: 'Url'
})