import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RentalOrderSchema = new Schema(
  {
    renterId: {
      type: Schema.Types.ObjectId,
      ref: "social-logins",
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "social-logins",
      required: true,
    },
    listingId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rentalPeriod: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "ongoing", "returned", "cancelled"],
      default: "pending",
    },
    returnDueDate: {
      type: Date,
      required: true,
    },
    returnedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const RentalOrder = mongoose.model("RentalOrder", RentalOrderSchema);

export default RentalOrder;