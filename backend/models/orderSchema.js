import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "social-logins",
    required: true,
  },
  type: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = model("Order", orderSchema);

export default Order;
