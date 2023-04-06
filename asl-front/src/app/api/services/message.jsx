import api from "./apiConfig.js";

export const getMessage = async (id) => {
  try {
    const response = await api.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendMessage = async (request) => {
  try {
    const response = await api.post("/messages/", request.body);
    return response.data;
  }

  catch (error) {
    throw error;
  }
};