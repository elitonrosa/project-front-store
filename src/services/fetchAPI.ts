import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

export const getCategories = async (): Promise<[]> => {
  return api.get(`/sites/MLB/categories`).then(({ data }) => data);
};

export const searchByQuery = async (query: (string | undefined)): Promise<[]> => {
  if (query) {
    return api.get(`/sites/MLB/search?q=${query.replaceAll(' ', '%')}`).then(({ data: { results } }) => results);
  }
  return [];
}

export const getByCategory = async (categoryId: (string | undefined)): Promise<[]> => {
  if (categoryId) {
    return api.get(`/sites/MLB/search?category=${categoryId}`).then(({ data: { results } }) => results);
  }
  return [];
}
