import { defineStore } from 'pinia';
import userService from '@/services/userService';
import authService from '@/services/authService';

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
        userRoles: null,
        isLoggedIn: authService.isLoggedIn(),
    }),
    actions: {
        async fetchUserData() {
            try {
                const data = await userService.getUserInfo();
                this.userData = data;
                userService.updateUserData(data);
            } catch (error) {
                console.error('Fehler beim Abrufen der Nutzerdaten:', error);
                throw error;
            }
        },
        async fetchUserRoles() {
            try {
                const roles = await userService.getUserRoles();
                this.userRoles = roles;
                userService.updateUserRoles(roles);
            } catch (error) {
                console.error('Fehler beim Abrufen der Nutzerrollen:', error);
                throw error;
            }
        },
        logout() {
            authService.logout();
            this.userData = null;
            this.userRoles = null;
            this.isLoggedIn = false;
            userService.clearUserData();
        },
    },
});
