import axios from 'axios';
import keycloak from './keycloak';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api',
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = keycloak.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
