'use client'
import Login from "@/Components/Login/Login"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Component() {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return (
            <section className="container mx-auto">
                Signed in as {session.user.email} <br />
                <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={100}
                    height={100}
                />
                <button className="themeBtn" onClick={() => signOut()}>Sign out</button>
            </section>
        )
    }
    return (
        <>
            <Login />
        </>
    )
}