import Order from '../models/Order.js';
import User from '../models/User.js';
// import Product from '../models/Product.js';
import { isValidObjectId } from 'mongoose';

const getOrders = async (req, res) => {
  const orders = await Order.find().lean();
  res.json(orders);
};

const createOrder = async (req, res) => {
  const { userId } = req.sanitizedBody;

  const found = await User.findById(userId);

  if (!found) throw new Error('User not found', { cause: 404 });

  const order = await Order.create(req.sanitizedBody);
  res.status(201).json(order);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const order = await Order.findById(id).lean().populate('userId').populate('products.productId');

  if (!order) throw new Error('Order not found', { cause: 404 });

  res.json(order);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const order = await Order.findByIdAndUpdate(id, req.sanitizedBody, { new: true });

  if (!order) throw new Error('Order not found', { cause: 404 });

  res.json(order);
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const order = await Order.findByIdAndDelete(id);

  if (!order) throw new Error('Order not found', { cause: 404 });

  res.status(200).json({ message: 'Order deleted' });
};

export { getOrders, createOrder, getOrderById, updateOrder, deleteOrder };
