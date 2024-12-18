import axios from 'axios';

const axiosAuthInstance = axios.create({
    baseURL: 'http://217.160.66.229:8080/realms/emissionen-berechnen-realm/protocol/openid-connect',
    timeout: 5000,
});

const authService = {
    async login(username, password) {
        try {
            const response = await axiosAuthInstance.post('/token', new URLSearchParams({
                grant_type: 'password',
                client_id: 'emissionen-berechnen-frontend',
                scope: 'openid',
                username,
                password,
            }));
            console.log("AuthService:" + response);
            const { access_token, refresh_token } = response.data;

            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            return { access_token, refresh_token };
        } catch (error) {
            console.error('Login fehlgeschlagen:', error);
            throw new Error('Login fehlgeschlagen. Bitte prüfe deine Eingaben.');
        }
    },

    async logout() {

        try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (!refreshToken) {
                console.warn('Kein Refresh-Token vorhanden.');
                return;
            }

            await axiosAuthInstance.post('/logout', new URLSearchParams({
                client_id: 'emissionen-berechnen-frontend',
                refresh_token: refreshToken,
            }));

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            console.log('Logout erfolgreich.');
            window.location.reload();
        } catch (error) {
            console.error('Fehler beim Logout:', error);
        }

        //await keycloak.logout();

        /*
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.reload();
        */
    },
    /*
    getAccessToken() {
        return keycloak.token;
    },
    isAuthenticated() {
        return keycloak.authenticated;
    },
    */

    getAccessToken() {
        return localStorage.getItem('access_token');
    },

    isAuthenticated() {
        return !!localStorage.getItem('access_token');
    },

    async getUserInfo() {
        const token = this.getAccessToken();
        if (!token) throw new Error("Kein Access-Token gefunden.");

        try {
            const response = await axiosAuthInstance.get('/userinfo', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                await this.refreshToken();
                return this.getUserInfo();
            }
            throw error;
        }
    },

    async refreshToken() {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error("Kein Refresh-Token gefunden.");

        try {
            const response = await axiosAuthInstance.post('/token', new URLSearchParams({
                grant_type: 'refresh_token',
                client_id: 'emissionen-berechnen-frontend',
                refresh_token: refreshToken,
            }));
            const { access_token, refresh_token } = response.data;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
        } catch (error) {
            await this.logout();
            throw new Error("Token-Aktualisierung fehlgeschlagen. Bitte erneut anmelden.");
        }
    }

};


export default authService;

