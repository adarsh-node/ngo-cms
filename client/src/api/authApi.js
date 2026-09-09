import api from "./axios.js";

const loginAdmin = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  return response.data;
};

const getCurrentAdmin = async (token) => {
  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  loginAdmin,
  getCurrentAdmin,
};