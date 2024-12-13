/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_SECRET: string;

    GOOGLE_ID: string;
    GOOGLE_SECRET: string;

    DATABASE_URL: string;

    UPLOADTHING_TOKEN: string;
    UPLOADTHING_APP_ID: string;

    EMAIL_USER: string;
    EMAIL_PASS: string;
    CLIENT_EMAIL: string;

    AUTH_EMAILS: string;
  }
}
