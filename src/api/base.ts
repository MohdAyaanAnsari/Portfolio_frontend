import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-2ogr.onrender.com/api", // your backend base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
