'use client';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import './Header.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Header() {
    const [headerActive, setHeaderActive] = useState(false);
    const activeLink = usePathname();
    const [ActiveBtn, SetActiveBtn] = useState(false);

    // Function to toggle theme
    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        SetActiveBtn(!ActiveBtn);
    };

    // Apply theme on page load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            SetActiveBtn(true); // Set the toggle button to active if dark theme is applied
        } else {
            document.documentElement.classList.remove('dark');
            SetActiveBtn(false);
        }
    }, []);

    return (
        <>
            <header className="header">
                <nav>
                    <Link href={'/'} onClick={() => headerActive === true ? setHeaderActive(!headerActive) : ''} className="logo">
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
                                <Link className={`${activeLink === "/" ? 'active' : ""}`} href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className={`${activeLink === "/about" ? 'active' : ""}`} href='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link className={`${activeLink === "/services" ? 'active' : ""}`} href='/services'>Services</Link>
                            </li>
                            <li>
                                <Link className={`${activeLink === "/faqs" ? 'active' : ""}`} href='/faqs'>FAQs</Link>
                            </li>
                            <li>
                                <Link className={`${activeLink === "/contact" ? 'active' : ""}`} href='/contact'>Contact Us</Link>
                            </li>
                            <li>
                                <button onClick={toggleTheme} className={ActiveBtn ? 'switchBtn active' : 'switchBtn'}>
                                    <span className="ball" />
                                </button>
                            </li>
                            {/* <li className='linkBtn'>
                                <Link href='/admin'>Get Started</Link>
                            </li> */}
                        </ul>
                    </div>
                    <button onClick={toggleTheme} className={ActiveBtn ? 'switchBtn active' : 'switchBtn'}>
                        <span className="ball" />
                    </button>
                    <button className="toggleBtn" onClick={() => setHeaderActive(!headerActive)}>
                        <i className="fas fa-bars" />
                    </button>
                </nav>
            </header>
            <div className={`${headerActive ? 'active ' : ''} mobileMenu navbar`}>
                <ul>
                    <li>
                        <Link onClick={() => setHeaderActive(!headerActive)} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setHeaderActive(!headerActive)} href='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link onClick={() => setHeaderActive(!headerActive)} href='/services'>Services</Link>
                    </li>
                    <li>
                        <Link onClick={() => setHeaderActive(!headerActive)} href='/faqs'>FAQs</Link>
                    </li>
                    <li>
                        <Link onClick={() => setHeaderActive(!headerActive)} href='/contact'>Contact Us</Link>
                    </li>
                    <li className='linkBtn'>
                        <Link href='/admin'>Get Started</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
