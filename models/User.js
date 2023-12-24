const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  port: config.development.port,
  dialect: config.development.dialect,
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
