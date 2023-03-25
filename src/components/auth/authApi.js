import axios from "axios";
import axiosInstance from "../other/axiosInstance";
import CONST from "../other/Constant";

const AuthApi = {
  signIn: async (username, password) => {
    const result = await axiosInstance.post("auth/login", {
      username,
      password,
    });
    return result.data.data;
  },
  signUp: async (profileName, username, password) => {
    try {
      const result = await axios.post(`${CONST.baseUrl}auth/register`, {
        profileName,
        username,
        password,
      });
      return result.data.message;
    } catch (error) {
      console.log(error);
    }
  },
};

export default AuthApi;
