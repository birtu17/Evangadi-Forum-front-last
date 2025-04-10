import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:2017/api",
  baseURL:"https://evangadiforumbackend-ezcc.onrender.com/api"
});

export default axiosInstance;
