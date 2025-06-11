import { z } from 'zod/v4';

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

export { categorySchema, orderSchema };
