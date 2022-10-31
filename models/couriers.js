const { Sequelize } = require('sequelize');
const { sequelize } = require('../db/db.js');

const Courier = sequelize.define('Couriers', {
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
  commission: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  deliveryTime: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = {
  Courier
}