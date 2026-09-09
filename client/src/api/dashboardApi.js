import api from "./axios.js";

const getDashboardStats = async (token) => {
  const response = await api.get("/dashboard/stats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export {
  getDashboardStats,
};