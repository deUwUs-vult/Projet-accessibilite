import {AuthOptions} from "@/app/api/auth/[...nextauth]/options";
import SessionProvider from "@/components/SessionProvider";
import type {Metadata} from "next";
import "./globals.css";
import {getServerSession} from "next-auth";
import {Poppins} from "next/font/google";
import React from "react";

const poppins = Poppins({subsets: ["latin"], weight: "700"});
export const metadata: Metadata = {
    title: "Forms",
    description: "",
};


export default async function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(AuthOptions);
    return (
        <html lang="fr">
        <body
            className={
                poppins.className +
                "w-screen min-h-screen h-fit flex bg-[#02394A] text-white"
            }
        >
        <SessionProvider session={session}>
            <main className="w-screen flex text-white">
                {children}
            </main>
        </SessionProvider>
        </body>
        </html>
    );
}