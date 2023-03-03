import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: 'https://anthony-hai-back-end-official.vercel.app/api',
	// baseURL: 'http://localhost:3301/api',
	baseURL: '/',
});

axiosInstance.defaults.headers.common[
	'Authorization'
] = `Bearer ${localStorage.getItem('token')}`;

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
