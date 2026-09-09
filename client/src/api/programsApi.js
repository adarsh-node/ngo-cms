import api from "./axios.js";

const getPrograms = async () => {
  const response = await api.get("/programs");

  return response.data;
};

const getProgramById = async (id) => {
  const response = await api.get(`/programs/${id}`);

  return response.data;
};

const createProgram = async (programData, token) => {
  const response = await api.post("/programs", programData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const updateProgram = async (id, programData, token) => {
  const response = await api.put(`/programs/${id}`, programData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteProgram = async (id, token) => {
  const response = await api.delete(`/programs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  getPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
};