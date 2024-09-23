import React from 'react'
import './login.scss'
import Image from 'next/image'

function Login() {
    return (
        <section className="loginPage">
            <figure>
                <Image className='logo' src={'/images/logo-black.png'} width={400} height={106} />
                <Image src={'/images/login.webp'} fill alt='' />
            </figure>
            <div className="loginCont">
                <form action="">
                    <div className="inputCont">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' />
                    </div>
                    <div className="inputCont">
                        <label htmlFor="password">Password</label>
                        <input type="password" min={6} max={9} name='password' />
                    </div>
                    <div className="inputCont">
                        <button className="themeBtn">Login</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login