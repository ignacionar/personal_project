const { Customer } = require('../models/customers');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Customer.findAll();
    return res.status(200).json(ALL);
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const ROW = await Customer.findByPk(req.params.id);
    if (!ROW) {
      return res.status(500).send("User was not found")
    }
    return res.status(200).json(ROW);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const CUSTOMER_MODEL = {
      name: req.body.name,
      activeDiscount: req.body.activeDiscount,
    }
    try {
      const customer = await Customer.create(CUSTOMER_MODEL);
      console.log("Customer created");
      return res.status(201).json(customer);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const CUSTOMER_MODEL = {
      name: req.body.name,
      activeDiscount: req.body.activeDiscount,
    }
    try {
      const customer = await Customer.update(CUSTOMER_MODEL, {where: {id: req.params.id}});
      if (!customer) {
        return res.status(500).send("Customer was not found")
      }
      console.log("Customer updated");
      return res.status(200).json(customer);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const customer = await Customer.destroy({where: {id: req.params.id}});
    console.log("Customer deleted");
    if (!customer) {
      return res.send("Customer was not found")
    }
    return res.status(200).json(customer);
  } catch (err) {
    return res.status(500).json(err); 
  }
};