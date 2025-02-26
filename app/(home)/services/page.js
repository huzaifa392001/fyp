import ContactUsSec from '@/components/ContactUsSec/ContactUsSec'
import ImgCard from '@/components/ImgCard/ImgCard'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import ServicesSec from '@/components/ServicesSec/ServicesSec'
import safetyData from '@/Data/ImgCardData.json';
import hireData from '@/Data/HireCardData.json';
import React from 'react'

function page() {
    return (
        <main>
            <InnerBanner heading={"Services"} />
            <ServicesSec />
            <section className="serviceSec">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {safetyData.map((data, index) => (
                            <ImgCard
                                key={index}
                                heading={data.heading}
                                description={data.description}
                                img={data.img}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* <AboutBanner /> */}
            {/* <section className="serviceSec">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {hireData.map((data, index) => (
                            <ImgCard
                                key={index}
                                heading={data.heading}
                                description={data.description}
                                img={data.img}
                            />
                        ))}
                    </div>
                </div>
            </section> */}
            <ContactUsSec />
        </main>
    )
}

export default page

export const metadata = {
    title: "Services - ParcelPro",
    alternates: {
        canonical: "https://parcelproconnect.vercel.app/services",
    },
};