import { Databases } from "appwrite"
import {client} from "@/appwrite"


const databases = new Databases(client);


export let promise = databases.listDocuments(
  `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
  `${process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID}`,
  
);



promise.then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});


// export const getDatabaseId = async () => {
//   const data = await databases.listDocuments(
//     process.env.NEXT_PUBLIC_DATABASE_ID!,
//     process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
//   )

//   const todos1 = data.documents;

//   console.log("Hello")
//   console.log(todos1)


  

  


// }