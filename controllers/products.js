import { isValidObjectId } from 'mongoose';
import Product from '../models/Product.js';

const getProduct = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

const createProduct = async (req, res) => {
  const { categoryId } = req.sanitizedBody;

  const found = await Product.findOne({ categoryId });

  if (found) throw new Error('Category id already exists', { cause: 400 });

  const product = await Product.create(req.sanitizedBody);
  res.json(product);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const product = await Product.findById(id);

  if (!product) throw new Error('Product not found', { cause: 404 });
  res.json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const product = await Product.findByIdAndUpdate(id, req.sanitizedBody, { new: true });

  if (!product) throw new Error('Product not found', { cause: 404 });
  res.json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const product = await Product.findByIdAndDelete(id);

  if (!product) throw new Error('Product not found', { cause: 404 });
  res.json({ message: 'Product deleted successfully' });
};

export { getProduct, createProduct, getProductById, updateProduct, deleteProduct };
