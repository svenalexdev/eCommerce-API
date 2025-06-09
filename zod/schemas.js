import { z } from "zod/v4";

const categorySchema = z.object({
    name: z.string().min(1, "Name is required").max(255),
});

export { categorySchema };
