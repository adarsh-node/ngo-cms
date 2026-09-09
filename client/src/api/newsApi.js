import api from "./axios.js";

const getNews = async () => {
  const response = await api.get("/news");
  return response.data;
};

const getAdminNews = async (token) => {
  const response = await api.get("/news/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const getNewsById = async (id) => {
  const response = await api.get(`/news/${id}`);
  return response.data;
};

const createNews = async (newsData, token) => {
  const response = await api.post("/news", newsData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const updateNews = async (id, newsData, token) => {
  const response = await api.put(`/news/${id}`, newsData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteNews = async (id, token) => {
  const response = await api.delete(`/news/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  getNews,
  getNewsById,
  getAdminNews,
  createNews,
  updateNews,
  deleteNews,
};
