import axios from 'axios';
import userService from "@/services/userService.js";

const AUTH_BASE_URL = '/api/v1/auth';

const authService = {
    /**
     * Sendet die Login-Daten an das Backend und erhält das Token.
     * @param {Object} credentials - Benutzeranmeldedaten (z. B. { username, password }).
     * @returns {Promise} Axios Promise mit der Serverantwort.
     */
    login(credentials) {
        return axios.post(`${AUTH_BASE_URL}/login`, null, {
            params: {
                username: credentials.username,
                password: credentials.password
            }
        }).then((response) => {
            const { access_token, refresh_token, expires_in } = response.data;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            const expirationTime = Date.now() + expires_in * 1000;
            localStorage.setItem('tokenExpiration', expirationTime);
            return response.data;
        })
        .catch((error) => {
            console.error('Login failed:', error.response?.data || error.message);
            throw error;
        });
    },

    /**
     * Aktualisiert das Token mit einem Refresh-Token.
     * @returns {Promise} Axios Promise mit der Serverantwort.
     */
    refreshToken() {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            return Promise.reject('Kein Refresh Token vorhanden.');
        }

        return axios.post(`${AUTH_BASE_URL}/refresh-token`, { refresh_token: refreshToken })
            .then((response) => {
                const { access_token, refresh_token, expires_in } = response.data;
                localStorage.setItem('accessToken', access_token);
                localStorage.setItem('refreshToken', refresh_token);
                const expirationTime = Date.now() + expires_in * 1000;
                localStorage.setItem('tokenExpiration', expirationTime);
                return response.data;
            })
            .catch((error) => {
                console.error('Token refresh failed:', error.response?.data || error.message);
                throw error;
            });
    },

    /**
     * Meldet den Nutzer ab, indem das Token entfernt wird.
     */
    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('tokenExpiration');
    },

    /**
     * Validiert das aktuelle Token.
     * @returns {Promise} Axios Promise mit der Serverantwort.
     */
    validateToken() {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            return Promise.reject('Kein Zugriffstoken vorhanden.');
        }

        return axios.get(`${AUTH_BASE_URL}/validate`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.data)
            .catch(error => {
                console.error('Token validation failed:', error.response?.data || error.message);

                if (error.response && error.response.status === 401) {
                    console.warn('Ungültiges Token: Abmelden.');
                    this.logout();
                    window.location.href = '/login';
                }

                throw error;
            });
    },

    /**
     * Prüft, ob das Token abgelaufen ist.
     * @returns {Boolean} True, wenn das Token abgelaufen ist.
     */
    isTokenExpired() {
        const expirationTime = localStorage.getItem('tokenExpiration');
        return !expirationTime || Date.now() > expirationTime;
    },

    /**
     * Prüft, ob der Nutzer angemeldet ist.
     * @returns {Boolean} True, wenn der Nutzer angemeldet ist.
     */
    isLoggedIn() {
        const token = localStorage.getItem('accessToken');
        return !!token && !this.isTokenExpired();
    },

    checkAuthStatus() {
        const token = localStorage.getItem('accessToken');
        const isTokenValid = token && !this.isTokenExpired();
        return isTokenValid;
    },

};

export default authService;
