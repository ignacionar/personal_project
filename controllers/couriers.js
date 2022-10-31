const { Courier } = require('../models/couriers');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Courier.findAll();
    return res.status(200).json(ALL);
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const ROW = await Courier.findByPk(req.params.id);
    return res.status(200).json(ROW);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const COURIER_MODEL = {
      name: req.body.name,
      rating: req.body.rating,
      commission: req.body.commission,
      deliveryTime: req.body.deliveryTime
    }
    try {
      const courier = await Courier.create(COURIER_MODEL);
      console.log("Courier created");
      return res.status(200).json(courier);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const COURIER_MODEL = {
      name: req.body.name,
      rating: req.body.rating,
      commission: req.body.commission,
      deliveryTime: req.body.deliveryTime
    }
    try {
      const courier = await Courier.update(COURIER_MODEL, {where: {id: req.params.id}});
      console.log("Courier updated");
      return res.status(200).json(courier);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const courier = await Courier.destroy({where: {id: req.params.id}});
    console.log("Courier deleted");
    return res.status(200).json(courier);
  } catch (err) {
    return res.status(500).json(err); 
  }
};
