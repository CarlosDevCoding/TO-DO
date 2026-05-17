require("dotenv").config();

console.log("Server is starting..."); 
console.log(process.env.MONGODB_URI);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./routes/taskRoutes");

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});