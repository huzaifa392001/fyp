'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import './AdminHeader.scss'
import { store } from '@/Redux/Store'
import { SET_LOGOUT } from '@/Redux/Slices/Admin'
import { usePathname, useRouter } from 'next/navigation'

function AdminHeader() {
    const [isActive, setIsActive] = useState(false)
    const [ActiveBtn, SetActiveBtn] = useState(false);
    const router = useRouter()

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

    const handleLogout = () => {
        store.dispatch(SET_LOGOUT())
        router.push('/admin')
    }

    return (
        <header>
            <figure className="logo">
                <Image src={'/images/logo.png'} width={300} height={106} alt='Platform Logo' />
            </figure>
            <nav>
                <ul>
                    <li>
                        <button onClick={toggleTheme} className={ActiveBtn ? 'switchBtn active' : 'switchBtn'}>
                            <span className="ball" />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsActive(!isActive)}>
                            <Image src={'/images/user.jpg'} width={40} height={40} alt='user Image' />
                            <i className="fas fa-chevron-down" />
                        </button>
                    </li>
                </ul>
                <div className={isActive ? 'userInfo active' : 'userInfo'}>
                    <ul>
                        <li>
                            <Link href={'#'}>Profile</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Settings</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Back to Website</Link>
                        </li>
                        <li className='logout'>
                            <button onClick={handleLogout} >Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default AdminHeader
