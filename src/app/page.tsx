"use client";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import { use, useEffect } from "react";

export default async function Page() {
  const session = await getServerSession(AuthOptions);
  useEffect(() => {
    if (session) {
      fetch("/api/template", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, []);
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        {!session ? (
          <>
            <Link className="" href={"/api/auth/signin"}>
              Se connecter{" "}
            </Link>
          </>
        ) : (
          <div className="flex flex-col">
            <h1>Choisie une template :</h1>
            {}
          </div>
        )}
      </div>
    </>
  );
}
