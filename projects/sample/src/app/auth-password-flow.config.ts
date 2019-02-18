// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authPasswordFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://keycloak-ngx.1d35.starter-us-east-1.openshiftapps.com/auth/realms/ngx',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'ngxapp',

  dummyClientSecret: 'geheim',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',

  showDebugInformation: true,

  oidc: false,
};
