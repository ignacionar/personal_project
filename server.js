const { connectDB } = require('./db/db.js');
const express = require('express');
const dotenv = require("dotenv");
const restaurantRouter = require('./routes/restaurant.routes.js');
const courierRouter = require('./routes/courier.routes.js');
const customerRouter = require('./routes/customer.routes.js');
const dishRouter = require('./routes/dish.routes.js');
const orderRouter = require('./routes/order.routes.js');
const { sequelize } = require('./db/db');
const { Restaurant, Dish, Order, Customer, Courier } = require('./models/index.js');

// CONFIGURATIONS
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
dotenv.config();

// sequelize.sync();
sequelize
  .authenticate()
  .then(async () => {
  await Restaurant.sync({force: true});
  await Dish.sync({force: true});
  await Order.sync({force: true});
  await Customer.sync({force: true});
  await Courier.sync({force: true});
  })
  .catch(err => {
    console.error(err);
})


// PORT & DB
const PORT = process.env.PORT || 7000;
connectDB();

// ROUTES
app.use('/restaurant', restaurantRouter);
app.use('/courier', courierRouter);
app.use('/customer', customerRouter);
app.use('/dish', dishRouter);
app.use('/order', orderRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});


