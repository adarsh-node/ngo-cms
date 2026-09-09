import News from "../models/News.js";

// Get all news
const getNews = async (req, res, next) => {
  try {
    const news = await News.find({
      status: "published",
    }).sort({ createdAt: -1 });

    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};

// Get one news item by id
const getNewsById = async (req, res, next) => {
  try {
    const newsItem = await News.findOne({
      _id: req.params.id,
      status: "published",
    });

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

const getAdminNews = async (req, res, next) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });

    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};

// Create news
const createNews = async (req, res, next) => {
  try {
    const {
  title,
  category,
  description,
  excerpt,
  image,
  author,
  status,
} = req.body;

    const newsItem = await News.create({
  title,
  category,
  description,
  excerpt,
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
  getAdminNews,
  createNews,
  updateNews,
  deleteNews,
};