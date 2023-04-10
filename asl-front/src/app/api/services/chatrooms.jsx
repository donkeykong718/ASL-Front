import api from "./apiConfig.js";


export const getRooms = async () => {
  try {
    const response = await api.get(`/conversations/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getaRoom = async (name) => {
  try {
    const response = await api.get(`/conversations/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRoom = async (request) => {
  try {
    const response = await api.post("/conversation/", request.body);

    return response.data;
  }

  catch (error) {
    throw error;
  }
};

