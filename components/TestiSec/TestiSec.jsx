import React from 'react';
import './TestiSec.scss';
import Image from 'next/image'; 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function TestiSec({ data }) {
    return (
        <section>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="testBox">
                            <figure className="imgBox">
                                <Image
                                    src={item.image}
                                    width={500}
                                    height={500}
                                    alt={item.heading}
                                />
                            </figure>
                            <div className="content">
                                <p>
                                    {item.description}
                                </p>
                                <h3>
                                    {item.heading}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default TestiSec;
