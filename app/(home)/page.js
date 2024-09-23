import ImgCard from "@/components/ImgCard/ImgCard";
import MainBanner from "@/components/MainBanner/MainBanner";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import safetyData from '@/Data/ImgCardData.json';
import hireData from '@/Data/HireCardData.json';
import Image from "next/image";
// import TestiSec from "../Components/TestiSec/TestiSec";
import TestimonialData from '@/Data/TestiData.json';
import AboutBanner from "@/components/AboutBanner/AboutBanner";
import AboutSec from "@/components/AboutSec/AboutSec";
import ServicesSec from "@/components/ServicesSec/ServicesSec";
import ContactUsSec from "@/components/ContactUsSec/ContactUsSec";

export default function Home() {
  return (
    <>
      <MainBanner />
      <AboutSec showBtn />
      <WhyChoose />
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
      <section className="serviceSec">
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
      </section>
      <ContactUsSec />
      {/* <TestiSec data={TestimonialData} /> */}
    </>
  );
}
