import axios from 'axios';
import authService from './authService';

const axiosInstance = axios.create({
    baseURL: '/api/v1',
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        let token = localStorage.getItem('accessToken');

        if (authService.isTokenExpired()) {
            try {
                const { access_token } = await authService.refreshToken();
                token = access_token;
            } catch (error) {
                console.error('Error refreshing token:', error);
                authService.logout();
                window.location.href = '/login';
                throw error;
            }
        }

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn('Unauthorized: Redirecting to login...');
            authService.logout();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
