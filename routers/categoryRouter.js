import { Router } from "express";
// import validateBody from "../middleware/validateBody.js";
import { categorySchema } from "../zod/schemas";
import {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from "../controllers/categories.js";

const categoryRouter = Router();

categoryRouter
    .route("/")
    .get(getCategories)
    .post(validateBody(categorySchema), createCategory);
categoryRouter
    .route("/:id")
    .get(getCategoryById)
    .put(validateBody(categorySchema), updateCategory)
    .delete(deleteCategory);

export default categoryRouter;
