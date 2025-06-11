import { Router } from "express";
//import validateBody from '../middleware/validateBody.js';
//import {productSchema} from '../zod/Schemas.js';
import {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const productRouter = Router();

productRouter.route("/").get(getProduct).post(createProduct);

productRouter
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default productRouter;
