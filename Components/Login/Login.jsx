import React from 'react'
import { signIn } from "next-auth/react"
import './login.scss'

function Login() {
    return (
        <section className="loginPage">
            <div className="container mx-auto">
                <button className="themeBtn flex w-fit mx-auto" onClick={() => signIn("github")}>Sign in using Github</button>
            </div>
        </section>
    )
}

export default Login