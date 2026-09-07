import News from "../models/News.js";

// Get all news
const getNews = async (req, res, next) => {
  try {
    const news = await News.find();

    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};

// Get one news item
const getNewsById = async (req, res, next) => {
  try {
    const newsItem = await News.findById(req.params.id);

    if (!newsItem) {
      return res.status(404).json({
        message: "News item not found",
      });
    }

    res.status(200).json(newsItem);
  } catch (error) {
    next(error);
  }
};

// Create news
const createNews = async (req, res, next) => {
  try {
    const { title, description, image, author, status } = req.body;

    const newsItem = await News.create({
      title,
      description,
      image,
      author,
      status,
    });

    res.status(201).json(newsItem);
  } catch (error) {
    next(error);
  }
};

// Update news
const updateNews = async (req, res, next) => {
  try {
    const newsItem = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!newsItem) {
      return res.status(404).json({
        message: "News item not found",
      });
    }

    res.status(200).json(newsItem);
  } catch (error) {
    next(error);
  }
};

// Delete news
const deleteNews = async (req, res, next) => {
  try {
    const newsItem = await News.findByIdAndDelete(req.params.id);

    if (!newsItem) {
      return res.status(404).json({
        message: "News item not found",
      });
    }

    res.status(200).json({
      message: "News item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};