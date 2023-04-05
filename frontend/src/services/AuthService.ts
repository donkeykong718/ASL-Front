import axios from "axios";
import { UserModel } from "../models/User";


class AuthService {
  setUserInLocalStorage(data: UserModel) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  async login(username: string, password: string): Promise<UserModel> {
    const response = await axios.post("http://127.0.0.1:8000/token/", { username, password });
    console.log(response.data)
    if (!response.data.token) {
      return response.data;
    }
    this.setUserInLocalStorage(response.data);
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const user = localStorage.getItem("user")!;
    return JSON.parse(user);
  }
}

export default new AuthService();
