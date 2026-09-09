import Message from "../models/Message.js";

// Get all messages
const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

// Get one message
const getMessageById = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

// Create message
const createMessage = async (req, res, next) => {
  try {
    const {
  name,
  email,
  phone,
  subject,
  message,
} = req.body;

    const newMessage = await Message.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    next(error);
  }
};

// Update message
const updateMessage = async (req, res, next) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMessage) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.status(200).json(updatedMessage);
  } catch (error) {
    next(error);
  }
};

// Delete message
const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.status(200).json({
      message: "Message deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export {
  getMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
};