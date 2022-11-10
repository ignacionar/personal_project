const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');
const { Dish } = require('./dishes.js');

const Restaurant = sequelize.define('Restaurants', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = {
  Restaurant
}
