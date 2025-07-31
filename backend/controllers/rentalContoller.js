import RentalOrder from "../models/rentalSchema.js";

const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);


const placeOrder = async (req, res) => {
  const { ownerId, listingId, rentalPeriod, price, returnDueDate } = req.body;

  // Input validation
  if (
    !ownerId ||
    !listingId ||
    rentalPeriod === undefined ||
    price === undefined ||
    !returnDueDate
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  if (
    !isValidObjectId(ownerId) ||
    !isValidObjectId(listingId) ||
    !Number.isInteger(rentalPeriod) ||
    rentalPeriod < 1 ||
    typeof price !== "number" ||
    price < 0 ||
    isNaN(Date.parse(returnDueDate))
  ) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  try {
    const rentalOrder = new RentalOrder({
      renterId: req.userId,
      ownerId,
      listingId,
      rentalPeriod,
      price,
      returnDueDate: new Date(returnDueDate),
      status: "pending",
    });
    const savedOrder = await rentalOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const getAllOrders = async (req, res) => {
  try {
    const orders = await RentalOrder.find({
      $or: [{ renterId: req.userId }, { ownerId: req.userId }],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const activeRentals = async (req, res) => {
  try {
    const activeStatuses = ["approved", "ongoing"];
    const orders = await RentalOrder.find({
      $and: [
        { $or: [{ renterId: req.userId }, { ownerId: req.userId }] },
        { status: { $in: activeStatuses } },
      ],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const specificOrder = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid order ID" });
  }
  try {
    const order = await RentalOrder.findById(id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    // Optionally, check if user is involved in the order
    if (
      order.renterId.toString() !== req.userId &&
      order.ownerId.toString() !== req.userId
    ) {
      return res.status(403).json({ error: "Access denied" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updateStatus = async (req, res) => {
  const { status } = req.body;
  const allowedStatuses = [
    "pending",
    "approved",
    "rejected",
    "ongoing",
    "returned",
    "cancelled",
  ];

  if (!status) {
    return res
      .status(400)
      .json({ message: "Missing required field: status" });
  }
  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const order = await RentalOrder.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    if (
      order.renterId.toString() !== req.userId &&
      order.ownerId.toString() !== req.userId
    ) {
      return res.status(403).json({ error: "Access denied" });
    }
    order.status = status;
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const extendPeriod = async (req, res) => {
  const { additionalDays } = req.body;

  if (additionalDays === undefined) {
    return res
      .status(400)
      .json({ message: "Missing required field: additionalDays" });
  }
  if (!Number.isInteger(additionalDays) || additionalDays < 1) {
    return res.status(400).json({ message: "Invalid additionalDays value" });
  }

  try {
    const order = await RentalOrder.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    if (order.renterId.toString() !== req.userId) {
      return res.status(403).json({ error: "Only renter can extend rental" });
    }
    order.rentalPeriod += additionalDays;
    order.returnDueDate = new Date(
      new Date(order.returnDueDate).getTime() +
        additionalDays * 24 * 60 * 60 * 1000
    );
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export {placeOrder, getAllOrders, specificOrder, updateStatus, extendPeriod, activeRentals};
