import axiosInstance from './axiosInstance';

const userService = {
    /**
     * Holt die Nutzerdaten basierend auf dem aktuellen Token.
     * @returns {Promise} Ein Promise mit den Nutzerdaten.
     */
    async getUserInfo() {
        try {
            const response = await axiosInstance.get('/users/userinfo');
            return response.data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Nutzerdaten:', error);
            throw error;
        }
    },

    /**
     * Aktualisiert die Nutzerdaten im lokalen Speicher.
     * @param {Object} userData - Die aktualisierten Nutzerdaten.
     */
    updateUserData(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
    },

    /**
     * Holt die gespeicherten Nutzerdaten aus dem lokalen Speicher.
     * @returns {Object|null} Die gespeicherten Nutzerdaten oder null, wenn keine vorhanden sind.
     */
    getStoredUserData() {
        const userData = localStorage.getItem('userData');
        console.log(userData);
        console.log(JSON.parse(userData));
        return userData ? JSON.parse(userData) : null;
    },

    /**
     * Löscht die gespeicherten Nutzerdaten aus dem lokalen Speicher.
     */
    clearUserData() {
        localStorage.removeItem('userData');
    }
};

export default userService;
