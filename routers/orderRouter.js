import { Router } from 'express';
import validateBody from '../middleware/validateBody.js';
import { orderSchema } from '../zod/schemas.js';
import { getOrders, createOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/orders.js';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(validateBody(orderSchema), createOrder);

orderRouter.route('/:id').get(getOrderById).put(validateBody(orderSchema), updateOrder).delete(deleteOrder);

export default orderRouter;
