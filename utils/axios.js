import axios from "axios";
// router
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const handleLogin = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic " +
      new Buffer(
        "3379b41787bf4903b57dbbf703f48016" +
          ":" +
          "718ede135a544ad781004897bf6d0e64"
      ).toString("base64")
  );

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", JSON.stringify(result));
    })
    .catch((error) => console.log("error", error));
};

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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      handleLogout();
    }
    return Promise.reject(error);
  }
);

export default instance;
