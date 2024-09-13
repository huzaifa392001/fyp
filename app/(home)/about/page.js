import InnerBanner from '@/Components/InnerBanner/InnerBanner'
import SectionHeading from '@/Components/SectionHeading/SectionHeading'
import React from 'react'
import './about.scss'
import Image from 'next/image'
import AboutBanner from '@/Components/AboutBanner/AboutBanner'

function page() {
  return (
    <main>
      <InnerBanner heading={"About Us"} />
      <section className="aboutInnerSec">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 md:place-items-end -mx-3">
            <div className="content col-span-7">
              <SectionHeading heading={"About ParcelPro"} />
              <p>
                {"At ParcelPro, we are pioneering a new era in the delivery industry within Pakistan, providing an innovative and inclusive platform that seamlessly connects businesses, individuals, and drivers across the nation. From the bustling urban centers of Karachi and Lahore to the serene, remote villages in the northern areas, ParcelPro ensures that your parcels are delivered safely, efficiently, and on time. We understand the unique challenges of Pakistan's diverse geography and infrastructure, and we are committed to bridging the gap between urban and rural areas, making delivery services accessible to everyone. "}
              </p>
              <p>
                {"Our platform is designed with the user in mind, offering a reliable and user-friendly experience whether you're a business owner looking to expand your customer base or an individual sending a personal package to a loved one. At ParcelPro, we handle all types of deliveries—from small, personal parcels to large, business shipments—with the utmost care and professionalism."}
              </p>
            </div>
            <div className="md:col-span-5">
              <figure className=''>
                <Image
                  src={'/images/deliveryguy.jpg'}
                  alt='About Us Image'
                  width={900}
                  height={600}
                />
              </figure>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="content">
              <SectionHeading heading={"Our Mission"} />
              <p>
                {"Our mission at ParcelPro is to empower businesses and individuals across Pakistan by providing a reliable, secure, and accessible delivery solution tailored to the needs of our diverse population. We strive to simplify the logistics process, breaking down barriers and making it easier for everyone to send and receive packages, regardless of their location, technological expertise, or financial resources."}
              </p>
              <p>
                {"We believe that by offering a delivery service that is both trustworthy and affordable, we can significantly contribute to the economic development of Pakistan. Our mission is to connect people and businesses, fostering economic growth and strengthening community ties across the country."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="content">
              <SectionHeading heading={"Our Vision"} />
              <p>
                {"We envision a future where ParcelPro becomes the leading delivery platform in Pakistan, recognized for its commitment to accessibility, security, and innovation. Our goal is to create a unified network that connects every corner of Pakistan, ensuring that even the most remote areas have access to reliable delivery services."}
              </p>
              <p>
                {"By continuously improving our platform and embracing the latest technological advancements, we aim to set new standards in the delivery industry. Our vision is to become an integral part of daily life in Pakistan, making deliveries a hassle-free experience for everyone—whether you’re sending a package to a neighboring city or across the country."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="content">
              <SectionHeading heading={"Our Values"} />
              <p>
                <span>{"Accessibility:"}</span>{" We are dedicated to making delivery services available to everyone in Pakistan, regardless of technological constraints or financial limitations. Our platform is designed to be inclusive, ensuring that even those without smartphones or credit cards can easily access and benefit from our services."}
              </p>
              <p>
                <span>{"Security:"}</span>{" At ParcelPro, safety is our top priority. We ensure that all our drivers undergo thorough background checks and possess valid licenses, so you can trust that your parcels are in safe hands. Additionally, all deliveries are fully insured, providing peace of mind to both senders and receivers."}
              </p>
              <p>
                <span>{"Reliability:"}</span>{" We understand the importance of timely deliveries, especially in a country as geographically diverse as Pakistan. With real-time tracking and a robust network of dedicated drivers, we are committed to delivering your parcels on time, every time. You can count on ParcelPro to handle your deliveries with the utmost care and efficiency."}
              </p>
              <p>
                <span>{"Innovation:"}</span>{" We are constantly evolving, embracing new technologies and incorporating customer feedback to enhance our platform. At ParcelPro, we are committed to staying ahead of the curve, offering the best delivery experience possible by integrating cutting-edge solutions that meet the needs of our users."}
              </p>
              <p>
                {"ParcelPro is more than just a delivery service; it’s a movement towards a more connected and economically vibrant Pakistan. By providing a trusted, efficient, and inclusive delivery platform, we are helping to drive the growth of businesses, support local economies, and improve the lives of people across the country. Join us on this journey, and experience a new level of convenience and reliability in your deliveries with ParcelPro."}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <AboutBanner /> */}
    </main>
  )
}

export default page