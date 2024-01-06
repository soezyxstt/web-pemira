import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type DefaultUser,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "~/server/db";
import { compare } from "bcrypt-ts"

import { env } from "~/env";
import { TRPCError } from '@trpc/server';

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      nim: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    // ...other properties
    nim: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: env.SESSION_MAXAGE,
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        nim: token.nim,
      },
    }),
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.nim = user.nim;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        nim: {
          label: "NIM",
          type: "text",
          placeholder: "13122080",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Credentials not provided",
          });
        }

        const { nim, password } = credentials;
        if (!nim || !password) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "NIM or password not provided",
          });
        }
        const user = await prisma.user.findUnique({
          where: {
            NIM: nim,
          },
        });
        if (!user) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Akun tidak ditemukan",
          });
        }
        console.log("user:", user);

        const isValid = await compare(password, user.passwordHash);
        if (!isValid) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Password salah",
          });
        }

        return {
          id: user.id,
          nim: user.NIM,
          name: user.name,
        };
      },
    }),
  ],
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
