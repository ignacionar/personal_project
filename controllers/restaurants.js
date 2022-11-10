const { Dish } = require('../models/dishes');
const { Restaurant } = require('../models/restaurants');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Restaurant.findAll();
    return res.status(200).json(ALL);
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const ROW = await Restaurant.findByPk(req.params.id, {
      include: Dish
    })
    return res.status(200).json(ROW);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const RESTAURANT_MODEL = {
      name: req.body.name,
      rating: req.body.rating
    }
    try {
      const restaurant = await Restaurant.create(RESTAURANT_MODEL);
      console.log("Restaurant created");
      return res.status(200).json(restaurant);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const RESTAURANT_MODEL = {
      name: req.body.name,
      rating: req.body.rating
    }
    try {
      const restaurant = await Restaurant.update(RESTAURANT_MODEL, {where: {id: req.params.id}});
      console.log("Restaurant updated");
      return res.status(200).json(restaurant);
    } catch (error) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.destroy({where: {id: req.params.id}});
    console.log("Restaurant deleted");
    return res.status(200).json(restaurant);
  } catch (err) {
    return res.status(500).json(err); 
  }
};
