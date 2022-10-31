const express = require('express');
const controller = require('../controllers/orders.js')
const orderRouter = express.Router();

orderRouter.get("/", controller.getAll);
orderRouter.get("/:id", controller.getOne);
orderRouter.post("/", controller.createOne);
orderRouter.put("/:id", controller.updateOne);
orderRouter.delete("/:id", controller.deleteOne);

module.exports = orderRouter;