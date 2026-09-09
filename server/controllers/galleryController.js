import Gallery from "../models/Gallery.js";

// Get all gallery items
const getGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.find();

    res.status(200).json(gallery);
  } catch (error) {
    next(error);
  }
};

// Get one gallery item
const getGalleryById = async (req, res, next) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);

    if (!galleryItem) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }

    res.status(200).json(galleryItem);
  } catch (error) {
    next(error);
  }
};

// Create gallery item
const createGallery = async (req, res, next) => {
  try {
    const {
      title,
      category,
      image,
      description,
      status,
    } = req.body;

    const galleryItem = await Gallery.create({
      title,
      category,
      image,
      description,
      status,
    });

    res.status(201).json(galleryItem);
  } catch (error) {
    next(error);
  }
};

// Update gallery item
const updateGallery = async (req, res, next) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!galleryItem) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }

    res.status(200).json(galleryItem);
  } catch (error) {
    next(error);
  }
};

// Delete gallery item
const deleteGallery = async (req, res, next) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(
      req.params.id
    );

    if (!galleryItem) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export {
  getGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
};