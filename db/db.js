const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "personal_project",
  "postgres",
  "adminuser",
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

