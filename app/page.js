import ImgCard from "@/Components/ImgCard/ImgCard";
import MainBanner from "@/Components/MainBanner/MainBanner";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";
import safetyData from '@/Data/ImgCardData.json';
import hireData from '@/Data/HireCardData.json';
import Image from "next/image";
// import TestiSec from "../Components/TestiSec/TestiSec";
import TestimonialData from '@/Data/TestiData.json';
import AboutSec from "@/Components/AboutSec/AboutSec";

export default function Home() {
  return (
    <>
      <MainBanner />
      <WhyChoose />
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
      <AboutSec />
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
      {/* <TestiSec data={TestimonialData} /> */}
    </>
  );
}
