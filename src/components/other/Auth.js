import Cookies from "js-cookie";

const Authorization = () => {
  if (Cookies.get("token") && Cookies.get("profileName")) return true;
  return false;
};

export default Authorization;
