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
  async getUserRoles() {
    try {
      const response = await axiosInstance.get('/users/roles');
      return response.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Nutzerrollen:', error);
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

  updateUserRoles(userRoles) {
    localStorage.setItem('userRoles', JSON.stringify(userRoles));
  },

  getStoredUserRoles() {
    const userRoles = localStorage.getItem('userRoles');
    return userRoles ? JSON.parse(userRoles) : null;
  },

  /**
   * Holt die gespeicherten Nutzerdaten aus dem lokalen Speicher.
   * @returns {Object|null} Die gespeicherten Nutzerdaten oder null, wenn keine vorhanden sind.
   */
  getStoredUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },

  /**
   * Löscht die gespeicherten Nutzerdaten aus dem lokalen Speicher.
   */
  clearUserData() {
    localStorage.removeItem('userData');
    localStorage.removeItem('userRoles');
  }
};

export default userService;
