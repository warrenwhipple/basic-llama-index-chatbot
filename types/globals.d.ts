export {};

declare global {
  interface CustomJwtSessionClaims {
    publicMetadata: {
      chat?: boolean;
    };
  }
}
