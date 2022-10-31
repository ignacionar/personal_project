const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');

const Customer = sequelize.define('Customers', {
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
  activeDiscount: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

module.exports = {
  Customer
}