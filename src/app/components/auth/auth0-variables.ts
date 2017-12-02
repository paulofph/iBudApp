interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'cRFkaTmUbaPJJceYU75W6JN6hz6xoDGJ',
  domain: 'ibud.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
