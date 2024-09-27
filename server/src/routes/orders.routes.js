import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import {
  orderValidation
} from "../validations/orders.validations.js";
import { applyValidations } from "../validations/apply.validations.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/",orderValidation, getOrdersCtrl, applyValidations);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/",orderValidation, createOrderCtrl);

export { ordersRouter };



