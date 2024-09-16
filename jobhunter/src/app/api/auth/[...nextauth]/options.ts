
import { baseUrl } from "@/utils";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Swal from "sweetalert2";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        // console.log("credentials: ", credentials?.username);
        

        //ini ntar bakal diubah ya gaes, ntar di register functionality kita ubah username nya unique
          //sementara masih manual utk user nya pake data[0]
        const urlEndpoint = baseUrl + `/user?username=${credentials?.username}`

        console.log(urlEndpoint);
        

        // const res = await fetch(urlEndpoint)
        const {data} = await axios({
          url: urlEndpoint
        })

        console.log("res options: ", data.length);
        
        if(!data[0]) {
          // console.log("true");
          
          return null
        }

        //
        return {
          id: data[0].id,
          email: data[0].email,
          name: data[0].name,
          username: data[0].username,
          role: data[0].role,
          image:
            "https://media.istockphoto.com/id/871752462/vector/default-gray-placeholder-man.jpg?s=612x612&w=0&k=20&c=4aUt99MQYO4dyo-rPImH2kszYe1EcuROC6f2iMQmn8o=",
        }
      }
    })
  ], 
  callbacks: {
    async jwt({token, user}) {

      // console.log("cbacks user: ", user);
      // console.log("cbacks token: ", token);
      
      if(user) {
        token.id = user.id,
        token.username = user.username,
        token.name = user.name
        token.role = user.role
      }

      // console.log("JWT Token: ",token);
      
      return token
    }, 
    async session({session, token}) {

      // console.log("session Token: ", token);
      
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.username = token.username;
      }

      // console.log("Session: ",session);

      return session
    }
  },
  pages: {
    signIn: '/auth/signIn'
  }
}