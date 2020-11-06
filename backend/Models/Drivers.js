const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')
class Driver extends Model {}
Driver.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address : Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
  card_id: Sequelize.INTEGER,
  drive_license: Sequelize.INTEGER,
  lat: Sequelize.INTEGER,
  lon: Sequelize.INTEGER,
  imgUrl:Sequelize.STRING
}, { sequelize, modelName: 'driver' });

module.exports = Driver;

