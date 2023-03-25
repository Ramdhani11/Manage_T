import axios from "axios";
import CONST from "./Constant";
import Cookies from "js-cookie";

const config = {
  baseURL: CONST.baseUrl,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((result) => {
  if (Cookies.get("token")) {
    result.headers.Authorization = `Bearer ${Cookies.get("token")}`;
  }
  return result;
});

export default axiosInstance;
