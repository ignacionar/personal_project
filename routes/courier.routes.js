const express = require('express');
const controller = require('../controllers/couriers')
const courierRouter = express.Router();

courierRouter.get("/", controller.getAll);
courierRouter.get("/:id", controller.getOne);
courierRouter.post("/", controller.createOne);
courierRouter.put("/:id", controller.updateOne);
courierRouter.delete("/:id", controller.deleteOne);

module.exports = courierRouter;