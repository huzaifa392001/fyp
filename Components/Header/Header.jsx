'use client'
import React, { useState } from 'react'
import './Header.scss'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    const [headerActive, setHeaderActive] = useState()

    return (
        <>
            <header className="header">
                <nav>
                    <Link href={'/'} className="logo">
                        <figure>
                            <Image
                                src={'/images/logo.png'}
                                width={300}
                                height={70}
                                alt='ParcelPro Logo'
                            />
                        </figure>
                    </Link>
                    <div className="navbar">
                        <ul>
                            <li>
                                <Link href='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link href=''>Franchise</Link>
                            </li>
                            <li>
                                <Link href=''>Partner</Link>
                            </li>
                            <li>
                                <Link href=''>FAQs</Link>
                            </li>
                            <li className='linkBtn'>
                                <Link href=''>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="toggleBtn" onClick={() => setHeaderActive(!headerActive)}>
                        <i className="fas fa-bars" />
                    </button>
                </nav>
            </header>
            <div className={`${headerActive ? 'active ' : ''}mobileMenu navbar`}>
                <ul>
                    <li>
                        <Link href=''>About Us</Link>
                    </li>
                    <li>
                        <Link href=''>Franchise</Link>
                    </li>
                    <li>
                        <Link href=''>Partner</Link>
                    </li>
                    <li>
                        <Link href=''>FAQs</Link>
                    </li>
                    <li className='linkBtn'>
                        <Link href=''>Contact Us</Link>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default Header