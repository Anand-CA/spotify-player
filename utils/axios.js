import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

instance.interceptors.request.use(
  (config) => {
    const access_token = JSON.parse(localStorage.getItem("token")).access_token;
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
