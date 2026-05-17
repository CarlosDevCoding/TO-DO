const express = require("express");
const router = express.Router();

const Task = require("../models/Task");



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

router.delete("/:id", async (req, res) => {

  try {

    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    res.json(deletedTask);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
});

router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
});
module.exports = router;