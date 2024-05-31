import Image from "next/image";
import {getServerSession} from "next-auth";
import {AuthOptions} from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

export default async function Page() {
    const session = await getServerSession(AuthOptions);
    return <>
        <div className="flex w-full h-full justify-center items-center">{!session ? <>
            <Link className="" href={"/api/auth/signin"}>Se connecter </Link></> : <>{session.user?.name}</>
        }</div>
    </>
}
