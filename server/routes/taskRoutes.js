const express = require("express");
const router = express.Router();

const Task = require("../models/Task");


// CREATE TASK
router.post("/", async (req, res) => {
  try {

    const newTask = await Task.create({
      text: req.body.text,
    });

    res.status(201).json(newTask);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
});

module.exports = router;