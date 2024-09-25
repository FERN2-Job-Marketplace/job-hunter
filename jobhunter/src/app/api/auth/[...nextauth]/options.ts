import { baseUrl } from "@/utils";
import axios from "axios";
import { error } from "console";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import Swal from "sweetalert2";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      async profile(profile: GoogleProfile) {
        const searchId = baseUrl + `/user/${profile.sub}`;

        const res = await fetch(searchId);

        // console.log("profile: ", profile);

        if (!res.ok) {
          // console.log("Masokkk");

          const postUser = baseUrl + "/user";

          const newData: User = {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            imageUrl: profile.picture,
            provider: "google",
            createdAt: new Date().toISOString(),
            isVerified: false,
            role: "candidate",
          };

          const newUser = await fetch(postUser, {
            method: "post",
            body: JSON.stringify(newData),
          });

          if (!newUser.ok) return;

          return newData;
        }

        const getUserData = await res.json();

        // console.log("json data: ", getUserData);

        return getUserData;
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "name@mail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials: ", credentials);

        //ini ntar bakal diubah ya gaes, ntar di register functionality kita ubah username nya unique
        //sementara masih manual utk user nya pake data[0]
        const urlEndpoint = baseUrl + `/user?email=${credentials?.email}`;

        // console.log("sesuatu");

        // const res = await fetch(urlEndpoint)
        const { data } = await axios({
          url: urlEndpoint,
        });

        // const credential = data.find()

        console.log("res options: ", data.length);

        if (!data[0]) {
          // console.log("true");
          return null;
        }

        //
        return {
          id: data[0].id,
          email: data[0].email,
          name: data[0].name,
          imageUrl: data[0].imageUrl,
          detailId: data[0].detailId,
          role: data[0].role,
          image:
            data[0].imageUrl ||
            "https://media.istockphoto.com/id/871752462/vector/default-gray-placeholder-man.jpg?s=612x612&w=0&k=20&c=4aUt99MQYO4dyo-rPImH2kszYe1EcuROC6f2iMQmn8o=",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log("cbacks user: ", user);
      // console.log("cbacks token: ", token);

      if (user) {
        (token.id = user.id), (token.detailId = user.detailId);
        token.name = user.name;
        token.role = user.role;
      }

      // console.log("JWT Token: ",token);

      return token;
    },
    async session({ session, token }) {
      // console.log("session Token: ", token);

      if (session?.user) {
        session.user.id = token.id;
        session.user.detailId = token.detailId;
        session.user.role = token.role;
        session.user.name = token.name;
      }

      // console.log("Session: ",session);

      return session;
    },
  },
  // session: {
  //   strategy: "jwt",
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  //   updateAge: 24 * 60 * 60, // 24 hours
  // },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  pages: {
    signIn: "/auth/signIn",
  },
  debug: true,
};
