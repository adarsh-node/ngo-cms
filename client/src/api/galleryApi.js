import api from "./axios.js";

const getGallery = async () => {
  const response = await api.get("/gallery");
  return response.data;
};

const getGalleryById = async (id) => {
  const response = await api.get(`/gallery/${id}`);
  return response.data;
};

const createGallery = async (galleryData, token) => {
  const response = await api.post("/gallery", galleryData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const updateGallery = async (id, galleryData, token) => {
  const response = await api.put(`/gallery/${id}`, galleryData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteGallery = async (id, token) => {
  const response = await api.delete(`/gallery/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  getGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
};