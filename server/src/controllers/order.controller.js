import { createOrder, getOrders, getOrderById, deleteOrderById } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrdersCtrl = (_req, res) => {
  const orders = getOrders();

  res.status(200).json(orders);
};



export const getOrderByIdCtrl = (_req, res) => {
  const orders = getOrderById();

  res.status(200).json(orders);
};



export const deleteOrderByIdCtrl = (_req, res) => {
  const orders = deleteOrderById();

  res.status(200).json(orders);
};


