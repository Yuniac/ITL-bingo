import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(
      process.env.REACT_APP_LOCAL_STORAGE_TOKEN_KEY!
    );

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
