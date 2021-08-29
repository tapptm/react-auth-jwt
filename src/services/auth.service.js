import axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

const login = async (username, password) => {
  const response = await axios
        .post(`${API_URL}signin`, {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  logout,
  getCurrentUser,
};