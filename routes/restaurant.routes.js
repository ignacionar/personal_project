const express = require('express');
const controller = require('../controllers/restaurants')
const restaurantRouter = express.Router();

restaurantRouter.get("/", controller.getAll);
restaurantRouter.get("/:id", controller.getOne);
restaurantRouter.post("/", controller.createOne);
restaurantRouter.put("/:id", controller.updateOne);
restaurantRouter.delete("/:id", controller.deleteOne);

module.exports = restaurantRouter;