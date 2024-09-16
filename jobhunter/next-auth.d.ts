import { DefaultUser, DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string,
            name: string,
            role: string,
            username?: string
        } & DefaultSession
    }

    interface User extends DefaultUser {
        username: string,
        name: string,
        role: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id?: string,
        username?: string,
        name: string,
        role: string
    }
}