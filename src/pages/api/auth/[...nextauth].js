import dynamic from "next/dynamic";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { PouchDBAdapter } from "@next-auth/pouchdb-adapter";
import PouchDB from "pouchdb";

// Setup your PouchDB instance and database
PouchDB.plugin(dynamic(() => import("pouchdb-adapter-leveldb"), { ssr: false })).plugin(dynamic(() => import("pouchdb-find"), { ssr: false })); // Don't forget the `pouchdb-find` plugin

const pouchdb = new PouchDB('GlossaryAuth');

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Email", type: "text", placeholder: "jsmith@domain.com" },
                password: { label: "Password", type: "password" }
            },
            // async authorize(credentials, req) {
            async authorize(credentials) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const url = process.env.NEXTAUTH_URL;
                const res = await fetch(`${url}/auth/signin`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    adapter: PouchDBAdapter(pouchdb),
}

export default NextAuth(authOptions)
