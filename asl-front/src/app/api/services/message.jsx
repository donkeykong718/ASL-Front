import api from "./apiConfig.js";

const LOCALSTORAGE_KEY = 'token'

export const getMessage = async (id) => {
  try {
    const response = await api.get(`/api/message/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendMessage = async (request) => {
  try {
    const response = await api.post("/api/message/", request.body);
    return response.data;
  }

  catch (error) {
    throw error;
  }
};