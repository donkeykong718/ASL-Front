import api from "./apiConfig.js";


export const getRooms = async () => {
  try {
    const response = await api.get(`/chatbox/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getaRoom = async (id) => {
  try {
    const response = await api.get(`/chatbox/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRoom = async (request) => {
  try {
    const response = await api.post("/chatbox/", request.body);

    return response.data;
  }

  catch (error) {
    throw error;
  }
};