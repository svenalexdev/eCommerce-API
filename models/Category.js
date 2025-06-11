import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [1, "Minimum length is 1 character"],
        maxLength: 255,
    },
});

export default model("Category", categorySchema);
