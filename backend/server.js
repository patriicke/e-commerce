const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const checkout = require("./model/checkouts");
const cors = require("cors");
const { checkoutTemplate } = require("./template/checkouts");
require("./config/db");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to instagram" });
});
app.post("/checkout", async (req, res) => {
  try {
    const { name, email, address, cart } = req.body;
    if ((!email, !name, !address, !cart?.length))
      return res.status(400).json({ message: "Bad request" });
    await checkout.create({ name, email, address, cart });
    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/checkout/all", async (req, res) => {
  const checkouts = await checkout.find();
  return res.status(200).send(checkoutTemplate(checkouts));
});
app.get("*", (req, res) => {
  return res.status(404).json({ message: "Invalid endpoint" });
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
