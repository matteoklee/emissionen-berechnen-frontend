import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import { MotionPlugin } from '@vueuse/motion'

//import keycloak from "@/services/keycloak.js";
//import keycloakService from "@/services/keycloakService.js";

/*
keycloak
    .init({
        onLoad: 'check-sso', //login-required check-sso
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        enableLogging: true,
        redirectUri: window.location.origin,
        //redirectUri: 'http://localhost:5173/',
        //pkceMethod: 'S256',
    })
    .then((authenticated) => {
        console.log("Keycloak authenticated:", authenticated);
        if (authenticated) {
            console.log("Benutzername:", keycloak.tokenParsed.preferred_username);
            console.log("E-Mail:", keycloak.tokenParsed.email);
            console.log("Vorname:", keycloak.tokenParsed.given_name);
            console.log("Nachname:", keycloak.tokenParsed.family_name);
            console.log("Rollen:", keycloak.tokenParsed.realm_access.roles);
            console.log(localStorage.getItem('access_token'));
            console.log(keycloakService.getAccessToken());
            //console.log(keycloakService.getUserInfo());
        }

        const app = createApp(App);

        app.config.globalProperties.$keycloak = keycloak;

        app.use(createPinia());
        app.use(router);
        app.use(MotionPlugin);

        app.mount('#app');
    })
    .catch((error) => {
        console.error('Keycloak initialisierung fehlgeschlagen:', error);
    });
    */


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount('#app');

