import { Client as Appwrite, Databases } from "appwrite";

export const Server = {
    endpoint: process.env.APPWRITE_ENDPOINT ?? "",
    project : process.env.APPWRITE_PROJECT ?? "",
    collectionID: process.env.APPWRITE_COLLECTION_ID ?? "",
    databaseID: process.env.APPWRITE_DATABASE_ID ?? "",
};

export const client = new Appwrite()
    .setEndpoint(Server.endpoint)
    .setProject(Server.project);

const databases = new Databases(client);

export const appwrite = { databases };
