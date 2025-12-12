import api from "./axios";

export const loginUser = async (username, password) => {
  const res = await api.post("/auth/login", { username, password });
  return res.data;
};
