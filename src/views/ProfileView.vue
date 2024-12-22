<template>
  <div class="mt-16 mx-8">
    <h1 class="text-center my-6 hidden">This is your profile page</h1>

    <div class="w-full mt-12">
      <div class="max-w-screen-lg mx-auto text-black">
        <div>
          <h1 class="text-xl font-medium">Profil</h1>
          <p class="text-gray-900 mt-2">
            This information will be displayed publicly so be careful what you share.
          </p>
          <hr class="my-4" />
        </div>

        <div
          class="flex lg:flex-row flex-col justify-between items-center border-b mt-6 text-lg border-gray-100"
        >
          <div class="lg:w-1/3 w-full">
            <p class="">Nachname</p>
          </div>
          <div class="lg:w-2/3 w-full flex justify-between">
            <div>
              <p>{{ userData.lastName }}</p>
            </div>
            <div>
              <a
                href="#"
                type="button"
                @click="console.log('update lastName')"
                class="text-blue-600 font-medium"
                >Aktualisieren</a
              >
            </div>
          </div>
        </div>

        <div
          class="flex lg:flex-row flex-col justify-between items-center border-b mt-6 text-lg border-gray-100"
        >
          <div class="lg:w-1/3 w-full">
            <p class="">Vorname</p>
          </div>
          <div class="lg:w-2/3 w-full flex justify-between">
            <div>
              <p>{{ userData.firstName }}</p>
            </div>
            <div>
              <a
                href="#"
                type="button"
                @click="console.log('update lastName')"
                class="text-blue-600 font-medium"
                >Aktualisieren</a
              >
            </div>
          </div>
        </div>

        <div
          class="flex lg:flex-row flex-col justify-between items-center border-b mt-6 text-lg border-gray-100"
        >
          <div class="lg:w-1/3 w-full">
            <p class="">Benutzername</p>
          </div>
          <div class="lg:w-2/3 w-full flex justify-between">
            <div>
              <p>{{ userData.username }}</p>
            </div>
            <div>
              <a
                href="#"
                type="button"
                @click="console.log('update lastName')"
                class="text-blue-600 font-medium"
                >Aktualisieren</a
              >
            </div>
          </div>
        </div>

        <div
          class="flex lg:flex-row flex-col justify-between items-center border-b mt-12 text-lg border-gray-100"
        >
          <div class="lg:w-1/3 w-full">
            <p class="">E-Mail</p>
          </div>
          <div class="lg:w-2/3 w-full flex justify-between">
            <div>
              <p>{{ userData.email }}</p>
            </div>
            <div>
              <a
                href="#"
                type="button"
                @click="console.log('update lastName')"
                class="text-blue-600 font-medium"
                >Aktualisieren</a
              >
            </div>
          </div>
        </div>

        <div
          class="flex lg:flex-row flex-col justify-between items-center border-b mt-12 text-lg border-gray-100"
        >
          <div class="lg:w-1/3 w-full">
            <p class="">Passwort</p>
          </div>
          <div class="lg:w-2/3 w-full flex justify-between">
            <div>
              <p>********</p>
            </div>
            <div>
              <a
                href="#"
                type="button"
                @click="console.log('update lastName')"
                class="text-blue-600 font-medium"
                >Aktualisieren</a
              >
            </div>
          </div>
        </div>

        <div>
          <h1 class="text-xl font-medium mt-12">Benutzerrollen</h1>
          <div class="flex justify-between">
            <p class="text-gray-900 mt-2">
              This information will be displayed publicly so be careful what you share.
            </p>
            <Button variant="outlined" class="border hover:bg-gray-200">Rolle hinzufügen</Button>
          </div>
          <hr class="my-4" />
        </div>

        <div>
          <div v-if="userRoles != null">
            <div v-for="role in userRoles" :key="role" class="inline-flex mt-2">
              <Badge variant="primary" class="bg-gray-900 text-white px-4 py-2 text-md mr-2">
                {{ role != null ? role : 'unknown role' }}</Badge
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService.js';
import Button from '@/components/ui/button/Button.vue';
import Badge from '@/components/ui/badge/Badge.vue';

export default {
  name: 'ProfileView',
  components: { Badge, Button },
  data() {
    return {
      userData: [],
      userRoles: []
    };
  },
  async created() {
    try {
      this.userData = await userService.getStoredUserData();
      this.userRoles = await userService.getStoredUserRoles();
      this.getRoles();
    } catch (error) {
      console.error('Fehler beim Abrufen der Benutzerinformationen:', error);
    }
  },
  methods: {
    getRoles() {
      const defaultKeycloakRoles = [
        'offline_access',
        'uma_authorization',
        'default-roles-emissionen-berechnen-realm',
        'account_manage-account-links',
        'account_view-profile',
        'account_manage-account'
      ];

      this.userRoles = userService.getStoredUserRoles();
      if (this.userRoles != null) {
        this.userRoles = this.userRoles
          .map((role) => role.replace(/^ROLE_/, ''))
          .filter((role) => !defaultKeycloakRoles.includes(role.toLowerCase()))
          .map((role) => role.toUpperCase());
      }
    }
  }
};
</script>

<style scoped></style>
