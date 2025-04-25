//Create a config options file
//Put this in the root by selecting the root heading
// then export an object called config 

// with session we want to define the sessi of 30 days
// we will adapt with Prisma 
// add the prisma object to the config from db prisma

// add the session callback to run at certain times

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials"; 
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";


export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
     },
     adapter: PrismaAdapter(prisma),
        providers: [CredentialsProvider({
                credentials: {
                    email: { type: "Email"},
                    password: {type: "password" }
                },
                async authorize (credentials){
                    if (credentials == null) return null;

                    // find user in database by creating a variable called user using await and the prisma object
                    const user = await prisma.user.findFirst({
                        where: 
                            { 
                                email: credentials.email as string
                            }
                    });

                    // check if user exists and password is correct
                    if (user && user.password) {
                        const isMatch = compareSync(credentials.password as string, user.password);

                    // if password is correct, return user
                    if (isMatch) {
                        return{
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            role: user.role
                        }
                    }
                    }
                    // if user does not exist or password is incorrect, return null
                    return null;
                }
            })
        ],
     

        callbacks: {
            async session({
              session,
              token
            }: {
              session: Session;
              token: JWT;
            }) {
              // Assure that session.user exists before setting an id
              if (session.user) {
                session.user.id = token.sub as string;
              }
              return session;
            }
          }





} satisfies NextAuthConfig;



// This is a configuration file for NextAuth.js.
// This file is used to configure NextAuth.js, a library for authentication in Next.js applications.
// It allows you to set up authentication providers, callbacks, and other options.
// The config object is exported and can be used to customize the authentication behavior.
// handlers are used to handle authentication requests.
// auth is used to handle authentication requests.
// signIn is used to handle sign-in requests.
// signOut is used to handle sign-out requests.
export const { handlers, auth, signIn, signOut   } = NextAuth(config);