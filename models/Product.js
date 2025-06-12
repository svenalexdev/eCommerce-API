import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: [true, "Product name is requires"] },
  description: { type: String, requires: [true, "Description is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  categoryId: { type: Number, required: true, unique: true, integer: true },
  createAt: { type: Date, default: Date.now },
});

export default model('Peoduct',productSchema);