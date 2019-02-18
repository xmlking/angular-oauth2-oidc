// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

const base = document.querySelector('base');
const baseUrl = (base && base.href) || window.location.origin + '/';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://keycloak-ngx.1d35.starter-us-east-1.openshiftapps.com/auth/realms/ngx',

  // URL of the SPA to redirect the user to after login
  redirectUri: baseUrl + 'home',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: baseUrl + +'silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'ngxapp',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email voucher',
  scope: 'openid profile email offline_access',

  // silentRefreshShowIFrame: true,

  showDebugInformation: true,

  sessionChecksEnabled: false,

  disableAtHashCheck: true,

  oidc: true,

  useIdTokenHintForSilentRefresh: true,
  skipIssuerCheck: true,
  strictDiscoveryDocumentValidation: false
};
