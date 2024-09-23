import React from 'react'
import './About.scss'
import Image from 'next/image'

function AboutBanner() {
    return (
        <section className="aboutSec py-0">
            <figure>
                <Image
                    src="/images/about.jpg"
                    alt="About our company"
                    fill
                />
            </figure>
            <div className="content">
                <div className="md:container mx-auto">
                    <h2>
                        <span>About Us</span>
                        {"Delivering Trust, One Parcel at a Time"}
                    </h2>
                    <p>
                        {"ParcelPro is a dynamic and innovative platform designed to revolutionize the way deliveries are managed and executed. We connect businesses, individuals, and drivers in a seamless network that ensures fast, reliable, and secure delivery services. Whether it's a business-to-business shipment, a vendor-to-customer package, or a personal delivery, ParcelPro is committed to providing top-notch service with a focus on safety and convenience. Our platform is inclusive, accessible to everyone, and designed to meet the diverse needs of our users. With real-time tracking, full insurance coverage, and a rigorous driver vetting process, ParcelPro guarantees peace of mind and satisfaction for every delivery."}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner