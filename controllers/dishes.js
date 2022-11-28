const { Dish } = require('../models/dishes');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Dish.findAll();
    return res.status(200).json(ALL);
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const ROW = await Dish.findByPk(req.params.id);
    if (!ROW) {
      return res.status(500).send("Dish was not found")
    }
    return res.status(200).json(ROW);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const DISH_MODEL = {
      name: req.body.name,
      dishPrice: req.body.dishPrice,
      preparationTime: req.body.preparationTime,
      restaurantId: req.body.restaurantId    
    }
    try {
      const dish = await Dish.create(DISH_MODEL);
      console.log("Dish created");
      return res.status(201).json(dish);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const DISH_MODEL = {
      name: req.body.name,
      dishPrice: req.body.dishPrice,
      preparationTime: req.body.preparationTime,
      restaurantId: req.body.restaurantId    
    }
    try {
      const dish = await Dish.update(DISH_MODEL, {where: {id: req.params.id}});
      if (!dish) {
        return res.status(500).send("Dish was not found")
      }
      console.log("Dish updated");
      return res.status(200).json(dish);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const dish = await Dish.destroy({where: {id: req.params.id}});
    console.log("Dish deleted");
    if (!dish) {
      return res.send("Dish was not found")
    }
    return res.status(200).json(dish);
  } catch (err) {
    return res.status(500).json(err); 
  }
};