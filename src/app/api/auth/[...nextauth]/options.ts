import {NextAuthOptions} from "next-auth";
import Github from "next-auth/providers/github";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/utils/prisma";

export const AuthOptions: NextAuthOptions = {
    providers: [Github({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret:  process.env.GITHUB_CLIENT_SECRET as string
    })],
    adapter: PrismaAdapter(prisma)
}