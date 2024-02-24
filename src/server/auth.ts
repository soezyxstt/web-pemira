// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type DefaultUser,
} from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { prisma } from "~/server/db";
// import { compare } from "bcrypt-ts";

// import { env } from "~/env";
// import { TRPCError } from "@trpc/server";

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
  providers: [],
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
