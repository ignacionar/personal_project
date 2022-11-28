const { Order } = require('../models/orders.js');
const { Customer } = require('../models/customers.js');
const { Courier } = require('../models/couriers.js');
const { Dish } = require('../models/dishes.js');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Order.findAll();
    return res.status(200).json(ALL);
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const ROW = await Order.findByPk(req.params.id);
    if (!ROW) {
      return res.status(500).send("Order was not found");
    }
    return res.status(200).json(ROW);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const PKCustomer = await Customer.findByPk(req.body.customerId);
    const PKCourier = await Courier.findByPk(req.body.courierId);
    const PKDish = await Dish.findByPk(req.body.dishId);
    try {
      const totalPrice = PKDish.dataValues.dishPrice + PKCourier.dataValues.commission;
      const discount = totalPrice / 10;

      const totalTime = PKDish.dataValues.preparationTime + PKCourier.dataValues.deliveryTime;

      const ORDER_MODEL = {
        customerId: req.body.customerId,
        courierId: req.body.courierId,
        dishId: req.body.dishId,
        totalPrice: totalPrice,
        totalTime: totalTime
      }

      if (PKCustomer.dataValues.activeDiscount) {
        ORDER_MODEL.totalPrice = totalPrice - discount;
      }

      const order = await Order.create(ORDER_MODEL);
      console.log("Order created");
      return res.status(201).json(order);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const PKCustomer = await Customer.findByPk(req.body.customerId);
    const PKCourier = await Courier.findByPk(req.body.courierId);
    const PKDish = await Dish.findByPk(req.body.dishId);
    try {
      const totalPrice = PKDish.dataValues.dishPrice + PKCourier.dataValues.commission;
      const discount = totalPrice / 10;

      if (PKCustomer.dataValues.activeDiscount === true) {
        totalPrice - discount;
      }

      const totalTime = PKDish.dataValues.preparationTime + PKCourier.dataValues.deliveryTime;

      const ORDER_MODEL = {
        customerId: req.body.customerId,
        courierId: req.body.courierId,
        dishId: req.body.dishId,
        totalPrice: totalPrice,
        totalTime: totalTime
      }

      const order = await Order.update(ORDER_MODEL, {where: {id: req.params.id}});
      if (!order) {
        res.status(500).send("Order was not found");
      }
      console.log("Order created");
      return res.status(200).json(order);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const order = await Order.destroy({where: {id: req.params.id}});
    console.log("Order deleted");
    if (!order) {
      return res.send("Order was not found");
    }
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err); 
  }
};