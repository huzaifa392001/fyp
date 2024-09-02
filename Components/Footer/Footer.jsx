import React from 'react'
import './Footer.scss'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid ">
                    <div className="footerContent">
                        <figure className="logo">
                            <Image
                                src={'/images/logo-white.png'}
                                width={250}
                                height={80}
                                alt='Footer Logo'
                            />
                        </figure>
                        <p>
                            ParcelPro is a dynamic and innovative platform designed to revolutionize the way deliveries are managed and executed.
                        </p>
                    </div>
                    <div className="links">
                        <h3>Quick Links</h3>
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
                            <li>
                                <Link href=''>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>Contact</h3>
                        <ul className='contactInfo'>
                            <li>
                                <Link href={'mailto:huzaifaiqbal134@gmail.com'} >
                                    <i className="fad fa-envelope-open-text" />
                                    <span>huzaifaiqbal134@gmail.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'tel:+923361889231'} >
                                    <i className="fad fa-phone"></i>
                                    <span>
                                        +92 (336) 188-9231
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={''} >
                                    <i className="far fa-map-marked-alt" />
                                    <span>
                                        Head Office
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://thehuzaifaiqbal.vercel.app/'} >
                                    <i className="fas fa-globe" />
                                    <span>The Huzaifa Iqbal</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container mx-auto">
                    <div className="copyrightCont">
                        <p>© 2024 ParcelPro. All rights reserved.</p>
                        <ul className="socialLinks">
                            <li>
                                <Link href={''}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
