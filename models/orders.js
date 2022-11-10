const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');
const { Courier } = require('./couriers.js');
const { Customer } = require('./customers.js');

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
  },
  courierId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dishId: {
    type: Sequelize.INTEGER,
    allowNull: false
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

Courier.hasMany(Order, {
  foreignKey: 'courierId',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Order.belongsTo(Courier, {foreignKey: 'courierId'});

Customer.hasMany(Order, {
  foreignKey: 'customerId',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Order.belongsTo(Customer, {foreignKey: 'customerId'});


module.exports = {
  Order
}