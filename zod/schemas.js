import { number, z } from 'zod/v4';

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid Email'),
  password: z.string().min(8)
});

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Desciption is required'),
  price: z.number().min(0, 'Price cannot be negativ'),
  categoryId: z.number().min(1, 'CategoryId is required')
});

const categorySchema = z.object({
  name: z.string().min(1, 'Name is required').max(255)
});

const orderSchema = z.object({
  userId: z.string().min(1),
  products: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().min(1, 'Quantity must be at least 1')
      })
    )
    .min(1, 'At least one product is required'),
  total: z.number().min(0, 'Total cannot be negative')
});

export { userSchema, productSchema, categorySchema, orderSchema };
