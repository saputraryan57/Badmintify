// src/api/index.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://681dff34c1c291fa6632938e.mockapi.io/api",
  timeout: 10000,
});

export default instance;
