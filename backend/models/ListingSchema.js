import mongoose, { Types } from "mongoose";

const productSchema = new mongoose.Schema({
  ownerId: { type: Types.ObjectId, ref: "social-logins", required: true }, //FK relation
  title: { type: String, required: true },
  price: { type: Number, required: true }, // keep ₹ + rate format or store number and format in frontend
  description: { type: String, required: true },
  img: { type: String, required: true },
  features: { type: [String], required: true },
  condition: {type: String, required: true},
  rentable: {type: Boolean, required: true},
  available: {type: Boolean}
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;