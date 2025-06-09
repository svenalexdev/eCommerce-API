import { Router } from "express";
import validateBody from '../middleware/validateBody.js';
import {productSchema} from '../zod/Schemas.js';
import {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../models/Product.js';

const productRouter =Router();

productRouter.route('/').get(getProduct).post(validateBody(productSchema),createProduct);

productRouter.route('/:id').get(getProductById).put(validateBody(productSchema),updateProduct).delete(deleteProduct);

export default productRouter;