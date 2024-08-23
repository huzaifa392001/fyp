import ImgCard from "@/Components/ImgCard/ImgCard";
import MainBanner from "@/Components/MainBanner/MainBanner";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";
import ImgData from '@/Data/ImgCardData.json';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainBanner />
      <WhyChoose />
      <section className="serviceSec">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ImgData.map((data, index) => (
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
      <section className="aboutSec py-2">
        <figure>
          <Image
            src={'/images/about.jpg'}
            alt="about img"
            height={700}
            width={1920}
          />
        </figure>
        <div class="content">
          <div className="container mx-auto">

          </div>
        </div>
      </section>
      <section className="serviceSec">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ImgData.map((data, index) => (
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
    </>
  );
}
