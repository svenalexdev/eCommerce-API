import express from 'express';
import './db/index.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import orderRouter from './routers/orderRouter.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/categories', categoryRouter);
app.use('/orders', orderRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
