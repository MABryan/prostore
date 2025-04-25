// auth.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";      // v5 adapter
import { prisma } from "@/db/prisma";
import { compareSync } from "bcrypt-ts-edge";
import { signInFormSchema } from "@/lib/validators";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email:    { label: "Email",    type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = signInFormSchema.parse(credentials);
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.password) return null;
        if (!compareSync(password, user.password)) return null;
        return {
          id:    user.id,
          name:  user.name,
          email: user.email,
          image: user.image,
          role:  user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
    error:  "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge:   30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
