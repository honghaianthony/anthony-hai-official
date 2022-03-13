import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://arcane-ocean-27301.herokuapp.com/api",
});

axiosInstance.defaults.headers.common[
    "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;

// axiosInstance.interceptors.request.use(function (config) {
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

axiosInstance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
