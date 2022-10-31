const express = require('express');
const controller = require('../controllers/dishes')
const dishRouter = express.Router();

dishRouter.get("/", controller.getAll);
dishRouter.get("/:id", controller.getOne);
dishRouter.post("/", controller.createOne);
dishRouter.put("/:id", controller.updateOne);
dishRouter.delete("/:id", controller.deleteOne);

module.exports = dishRouter;