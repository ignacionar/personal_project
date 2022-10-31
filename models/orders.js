const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');
const { Courier } = require('./couriers.js');
const { Customer } = require('./customers.js');
const { Dish } = require('./dishes.js');

const Order = sequelize.define('Orders', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  customerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Customers",
      key: "id"
    }
  },
  courierId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Couriers",
      key: "id"
    }
  },
  dishId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Dishes",
      key: "id"
    }
  },
  totalTime: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = {
  Order
}