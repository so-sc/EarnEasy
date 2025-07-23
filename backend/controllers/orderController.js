import Order, { find } from "../models/Order";

export async function placeBuyOrder(req, res) {
  try {
    const { user, product, quantity, price } = req.body;

    const order = new Order({
      user,
      type: "buy",
      product,
      quantity,
      price,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to place buy order", error: err });
  }
}

export async function placeSellOrder(req, res) {
  try {
    const { user, product, quantity, price } = req.body;

    const order = new Order({
      user,
      type: "sell",
      product,
      quantity,
      price,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to place sell order", error: err });
  }
}

export async function getUserOrders(req, res) {
  try {
    const orders = await find({ user: req.params.userId })
      .populate("product")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err });
  }
}
