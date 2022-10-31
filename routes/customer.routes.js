const express = require('express');
const controller = require('../controllers/customers')
const customerRouter = express.Router();

customerRouter.get("/", controller.getAll);
customerRouter.get("/:id", controller.getOne);
customerRouter.post("/", controller.createOne);
customerRouter.put("/:id", controller.updateOne);
customerRouter.delete("/:id", controller.deleteOne);

module.exports = customerRouter;