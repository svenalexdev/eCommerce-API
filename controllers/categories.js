import Category from "../models/Category.js";
import { isValidObjectId } from "mongoose";

const getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

const createCategory = async (req, res) => {
    const {name} = req.sanitizedBody;
    const found = await Category.findOne({ name });
    if (found) throw new Error("Name already exists", { cause: 400 });
    const category = await Category.create(req.sanitizedBody);
    res.status(201).json(category);
};

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId) throw new Error("Invalid id", { cause: 400 });
    const category = await Category.findById(id);
    if (!category) throw new Error("Category not found", { cause: 404 });
    res.json(category);
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw new Error("Invalid id", { cause: 400 });
    const category = await Category.findByIdAndUpdate(id, req.sanitizedBody, {
        new: true,
    });
    if (!category) throw new Error("Category not found", { cause: 404 });
    res.json(category);
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw new Error("Invalid id", { cause: 400 });
    const category = await Category.findByIdAndDelete(id);
    if (!category) throw new Error("Category not found", { cause: 404 });
    res.status(200).json({ message: "Category deleted successfully" });
};

export {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
