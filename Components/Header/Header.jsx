import React from 'react'
import './Header.scss'
import Link from 'next/link'

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <figure>
                        <h3>LOGO HERE</h3>
                    </figure>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link href=''>Home</Link>
                        </li>
                        <li>
                            <Link href=''>About Us</Link>
                        </li>
                        <li>
                            <Link href=''>Contact Us</Link>
                        </li>
                        <li className='linkBtn'>
                            <Link href=''>Login</Link>
                        </li>
                        <li className='linkBtn'>
                            <Link href=''>Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header