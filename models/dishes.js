const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');
const { Order } = require('./orders.js');
const { Restaurant } = require('./restaurants.js');

const Dish = sequelize.define('Dishes', {
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
  dishPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  preparationTime: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  restaurantId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Restaurant.hasMany(Dish, {
  foreignKey: 'restaurantId',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Dish.belongsTo(Restaurant, {foreignKey: 'restaurantId'});

Dish.hasMany(Order, {
  foreignKey: 'dishId',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Order.belongsTo(Dish, {foreignKey: 'dishId'});

module.exports = {
  Dish
}