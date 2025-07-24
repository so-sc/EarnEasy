import Order from "../models/orderSchema.js";

export async function placeBuyOrder(req, res) {
  try {
    console.log("Received body:", req.body); // 🔍 Debug incoming data

    const { user, product, quantity, price } = req.body;

if (!user || !product || !quantity || !price) {
  return res.status(400).json({ message: "Missing required fields" });
}

const order = new Order({
  user,
  type: "buy",
  product,
  quantity,
  price,
  status: "pending",
});

await order.save();

res.status(201).json({ message: "Order saved successfully", order });

  } catch (err) {
    console.error("Error placing order:", err); // Log the real error
    res.status(500).json({ message: "Failed to place buy order", error: err.message });
  }
}

export async function placeSellOrder(req, res) {
  try {
    console.log("Received body:", req.body); // for debugging

    const { user, product, quantity, price } = req.body;

    if (!user || !product || !quantity || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = new Order({
      user,
      type: "sell", // ✅ Only difference
      product,
      quantity,
      price,
      status: "pending", // Optional, for tracking order status
    });

    await order.save();

    res.status(201).json({ message: "Sell order placed successfully", order });

  } catch (err) {
    console.error("Error placing sell order:", err);
    res.status(500).json({ message: "Failed to place sell order", error: err.message });
  }
}


export async function getUserOrders(req, res) {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate("product")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err });
  }
}