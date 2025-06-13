import express from 'express';
import './db/index.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import orderRouter from './routers/orderRouter.js';
import errorHandler from './middleware/errorHandler.js'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/categories', categoryRouter);
app.use('/orders', orderRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.use('*splat', (req, res) => {
  throw new Error('Not found', { cause: 404 });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
