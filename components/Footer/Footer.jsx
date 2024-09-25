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
                        <Link href='/' className="logo">
                            <Image
                                src={'/images/logo-white.png'}
                                width={250}
                                height={80}
                                alt='Footer Logo'
                            />
                        </Link>
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
                                <Link href=''>Services</Link>
                            </li>
                            <li>
                                <Link href=''>FAQs</Link>
                            </li>
                            <li>
                                <Link href=''>Contact Us</Link>
                            </li>
                            <li>
                                <Link href=''>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>Scoial Media</h3>
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
            <div className="copyright">
                <div className="container mx-auto">
                    <div className="copyrightCont">
                        <p>© 2024 ParcelPro. All rights reserved.</p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
