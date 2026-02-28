import api from "./axiosInstance";

export const fetchData = async () => {
  const { data } = await api.get("/api/data");
  return data;
};