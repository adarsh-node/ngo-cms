import api from "./axios.js";

const getEvents = async () => {
  const response = await api.get("/events");

  return response.data;
};

const getEventById = async (id) => {
  const response = await api.get(`/events/${id}`);

  return response.data;
};

const createEvent = async (eventData, token) => {
  const response = await api.post("/events", eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const updateEvent = async (id, eventData, token) => {
  const response = await api.put(`/events/${id}`, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteEvent = async (id, token) => {
  const response = await api.delete(`/events/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};