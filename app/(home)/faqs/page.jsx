import InnerBanner from '@/components/InnerBanner/InnerBanner'
import React from 'react'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import './faq.scss'

function page() {
  return (
    <main>
      <InnerBanner heading={"FAQs"} />
      <section className='faqSec'>
        <div className="container">
          <div className="headingCont">
            <SectionHeading heading={"Frequently Asked Questions (FAQ)"} />
            <p>
              {"Welcome to the ParcelProConnect FAQ page! Here, you'll find answers to common questions about our platform, how it works, and how you can get started as a business, individual, or delivery partner. Whether you're looking to send parcels, partner with us as a driver, or understand how our fees work, this page has got you covered. If you need further assistance, don't hesitate to contact our support team."}
            </p>
          </div>
          <div className="faqCont">
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  What is ParcelProConnect?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"ParcelProConnect is a platform that connects businesses and individuals with delivery drivers for parcel delivery services. It facilitates Vendor to Customer, Person to Person, and Business to Business deliveries."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  How do I sign up as a delivery partner?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"You can register as a delivery partner by submitting your details through the app. Your information will be reviewed and approved by a company or the superadmin before you can start taking delivery jobs."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  Can a company register multiple delivery partners?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"Yes, once a company is verified, it can register multiple delivery partners through the ParcelProConnect platform."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  What types of deliveries can I request through ParcelProConnect?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"ParcelProConnect supports Vendor to Customer, Person to Person, and Business to Business deliveries, catering to a variety of delivery needs."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  How does the payment system work for delivery partners?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"Delivery partners are paid based on the jobs they complete. Additionally, there's a weekly cash deposit system where delivery partners deposit collected cash from customers into the company's account."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  What are the fees for using ParcelProConnect?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"Businesses pay a monthly registration fee to use the platform. Delivery partners are charged a 5% fee on each order they fulfill."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  What happens if I face an issue with my delivery?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"If you encounter any problems with a delivery, you can contact ParcelProConnect support through the app for assistance. Issues like delayed or incomplete deliveries will be addressed promptly."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  How are deliveries tracked?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"All deliveries are tracked in real-time through the ParcelProConnect app, providing updates on pickup and delivery statuses."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  Can individuals use ParcelProConnect for personal deliveries?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"Yes, individuals can use ParcelProConnect to send parcels to other people through the Person to Person delivery option."}
                </p>
              </div>
            </div>
            <div className="faqBox">
              <div className="headingBox">
                <h3>
                  How do companies get verified on ParcelProConnect?
                </h3>
              </div>
              <div className="descriptionBox">
                <p>
                  {"Companies must submit their details for approval by the superadmin. Once verified, they can register delivery partners and start using the platform."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page

export const metadata = {
  title: "FAQs - ParcelPro",
  alternates: {
    canonical: "https://parcelproconnect.vercel.app/faqs",
  },
};
