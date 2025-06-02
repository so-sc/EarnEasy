import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: {  type: Number, required: true }, // keep ₹ + rate format or store number and format in frontend
  desc: { type: String, required: true },
  img: { type: String, required: true }     // path or full image URL
});

const Product = mongoose.model("Product", productSchema);

export default Product;