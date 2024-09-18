import React from 'react'
import './ContactUsSec.scss'
import SectionHeading from '../SectionHeading/SectionHeading'
import Link from 'next/link'

function ContactUsSec() {
    return (
        <section className="contactUsSec">
            <div className="container">
                <div className="contactRow">
                    <div className="content">
                        <SectionHeading heading={"Contact Us From Here"} />
                        <p>
                            You can contact us from here, you can write to us, call us or visit our service center, we will gladly assit you.
                        </p>
                    </div>
                    <div className="info">
                        <ul>
                            <li>
                                <a href="tel:+923361889231">
                                    <strong><i className="fas fa-phone-alt" /> Phone: </strong>
                                    <span>+92 (336) 188-9231</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:huzaifaiqbal134@gmail.com">
                                    <strong><i className="fas fa-envelope" /> Email: </strong>
                                    <span>huzaifaiqbal134@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/NgsKJBm2qGuhgkLF8" target='_blank'>
                                    <strong><i className="fas fa-map-pin" /> Location: </strong>
                                    <span>Federal Urdu University of Arts, Science & Technology, Karachi</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://thehuzaifaiqbal.vercel.app" target='_blank'>
                                    <strong><i className="fas fa-globe-asia" /> Website: </strong>
                                    <span>Huzaifa Iqbal</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="btnCont">
                        <Link className='themeBtn' href={'/contact'}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSec
