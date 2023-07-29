// import { Client } from 'appwrite';

import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64bffb0f0e099039a750');
    



const databases = new Databases(client);

export { client, databases };


