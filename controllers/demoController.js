// Dependencies
const demographics = require("express").Router();
const db = require("../models");
const { Demo } = db;

// Find a Specific User's Demo
demographics.get("/:user_id/demographics", async (req, res) => {
  try {
    const foundDemo = await Demo.findAll({
    });
    res.status(200).json(foundDemo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create Demographics
demographics.post("/", async (req, res) => {
  try {
    const newDemo = await Demo.create(req.body);
    res.status(200).json({
      message: "Successfully inserted demographics for a user",
      data: newDemo,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Demographics
demographics.put("/:demo_id", async (req, res) => {
  try {
    const updatedDemo = await Demo.update(req.body, {
      where: {
        demo_id: req.params.demo_id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedDemo}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = demographics;
