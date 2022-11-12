const { Sequelize } = require('sequelize');
const NAME = process.env.DBNAME
const USER = process.env.DBUSER
const PASS = process.env.DBPASS

const sequelize = new Sequelize(
  NAME,
  USER,
  PASS,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Succesfully connected to database")
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}

module.exports = {
  sequelize: sequelize,
  connectDB
}

