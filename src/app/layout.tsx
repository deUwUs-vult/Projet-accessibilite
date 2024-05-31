import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deus Vult",
  description: "Forms template site accessible for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          {children}
        </main>
        </body>
    </html>
  );
}
