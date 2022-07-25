// Dependencies
const messages = require("express").Router();
const db = require("../models");
const { Message } = db;

// Find all Messages for a User
messages.get("/:user_id/messages", async (req, res) => {
  try {
    const foundMessages = await Message.findAll({ where: { user_id: req.params.user_id }});
    res.status(200).json(foundMessages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find a Specific Message NOT WORKING
messages.get(":user_id/messages/:message_id", async (req, res) => {
  try {
    const foundMessage = await Message.findOne({
      where: { message_id: req.params.message_id },
    });
    res.status(200).json(foundMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a Message
messages.post("/:user_id/messages", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new message",
      data: newMessage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Respond to a Message
messages.put("/:message_id", async (req, res) => {
  try {
    const updatedMessage = await Message.update(req.body, {
      where: {
        message_id: req.params.message_id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedMessage}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a Message
messages.delete("/:message_id", async (req, res) => {
  try {
    const deletedMessage = await Message.destroy({
      where: {
        message_id: req.params.message_id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedMessage}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = messages;
