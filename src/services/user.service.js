import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "localhost:4000/api/get/";

const getPublic = () => {
  return axios.get(API_URL + "bb-user");
};

const getAdmin = () => {
  return axios.get(API_URL + "bb-user-v2", { headers: authHeader() });
};

export default {
    getPublic,
    getAdmin,
};