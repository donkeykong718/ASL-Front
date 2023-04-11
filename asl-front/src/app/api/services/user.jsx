import api from "./apiConfig.js";

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  }
  catch (error) {
    throw (error)
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  }
  catch (error) {
    throw (error)
  }
}


export const signup = async (username, password) => {
  try {
    const response = await api.post('/users/', { username, password });
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(response.data));

    return response.data;
  }

  catch (error) {
    throw (error)
  }
};


export const signin = async (username, password) => {
  try {
    const response = await api.post("/token/", { username, password });
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(localStorage.getItem('user'))
    // console.log('Sign in returns:')
    // console.log(response);
    // localStorage.setItem("currentUser", username);

    return response.data;
  }

  catch (error) {
    return (error)
  }
};

export const changeUrName = async (user, newName) => {
  try {
    console.log(user)
    const response = await api.put(`/user/${user.id}`, { username: newName })
    localStorage.clear();
    localStorage.setItem('user', user);
    console.log(`Are you ${user.username} or ${newName}? Only time will tell!`)
    return response.data;
  }
  catch (error) {
    return (error)
  }

}

export const deleteUrAccount = async (user) => {
  try {
    console.log(user)
    const response = await api.delete(`/users/delete_user/`, { username: user.username })
    localStorage.clear();
    console.log(`User ${username} has been deleted`)
    return response.data;
  }
  catch (error) {
    return (error)
  }

}

export const logOff = () => {
  localStorage.clear();
}