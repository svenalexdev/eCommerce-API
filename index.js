import express from 'express';
import './db/index.js';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});