import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.scss'
import Image from 'next/image';

function Banner() {
    return (
        <section className="bannerSec p-0">
            <Swiper
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={'/images/fullBanner.jpg'}
                        width={1920}
                        height={600}
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={'/images/fullBanner.jpg'}
                        width={1920}
                        height={600}
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={'/images/fullBanner.jpg'}
                        width={1920}
                        height={600}
                        alt=''
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Banner