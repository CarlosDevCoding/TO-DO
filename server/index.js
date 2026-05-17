require("dotenv").config();

console.log("Server is starting..."); 
console.log(process.env.MONGODB_URI);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.connect(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});