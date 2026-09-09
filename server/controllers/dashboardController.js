import Program from "../models/Program.js";
import Event from "../models/Event.js";
import Gallery from "../models/Gallery.js";
import News from "../models/News.js";
import Message from "../models/Message.js";

const getDashboardStats = async (req, res, next) => {
  try {
    const [
      programs,
      events,
      gallery,
      news,
      messages,
      unreadMessages,
    ] = await Promise.all([
      Program.countDocuments(),
      Event.countDocuments(),
      Gallery.countDocuments(),
      News.countDocuments(),
      Message.countDocuments(),
      Message.countDocuments({ status: "unread" }),
    ]);

    res.status(200).json({
      programs,
      events,
      gallery,
      news,
      messages,
      unreadMessages,
    });
  } catch (error) {
    next(error);
  }
};

export { getDashboardStats };