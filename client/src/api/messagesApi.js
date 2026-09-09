import api from "./axios.js";

const createMessage = async (messageData) => {
  const response = await api.post("/messages", messageData);

  return response.data;
};

const getMessages = async (token) => {
  const response = await api.get("/messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const getMessageById = async (id, token) => {
  const response = await api.get(`/messages/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const updateMessage = async (id, messageData, token) => {
  const response = await api.put(`/messages/${id}`, messageData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteMessage = async (id, token) => {
  const response = await api.delete(`/messages/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};