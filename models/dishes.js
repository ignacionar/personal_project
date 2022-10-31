const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');
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
  restaurantId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Restaurants",
      key: "id"
    }
  },
  preparationTime: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Dish.belongsTo(Restaurant, {
  foreignKey: 'id',
  foreignKeyConstraint: true,
  onDelete: 'cascade'
})

module.exports = {
  Dish
}