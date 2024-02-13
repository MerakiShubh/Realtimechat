import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = "654fd5c3cc86652bae46";
export const DATABASE_ID = "654fd6e718b67e81ece3";
export const COLLECTION_ID_MESSAGES = "654fd6f2bd61271da74b";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654fd5c3cc86652bae46");

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
