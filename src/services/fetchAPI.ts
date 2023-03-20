import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

export const getCategories = async (): Promise<[]> => {
  return await api.get(`/sites/MLB/categories`).then((res) => res.data);
};
