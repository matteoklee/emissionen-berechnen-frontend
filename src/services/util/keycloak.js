import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://217.160.66.229:8080',
    realm: 'emissionen-berechnen-realm',
    clientId: 'emissionen-berechnen-frontend',
});

export default keycloak;
