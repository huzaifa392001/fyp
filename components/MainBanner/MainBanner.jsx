import React from 'react';
import './MainBanner.scss'
import Image from 'next/image';
import Link from 'next/link';

function MainBanner() {

    return (
        <section className='py-0'>
            <div className="mainBanner">
                <div className="container">
                    <div className="bannerRow">
                        <div className="content">
                            <h1>
                                Your Ultimate Parcel Delivery Solution
                            </h1>
                            <p>
                                Whether you need to send a package across the city or get something delivered to your doorstep, our
                                app has got you covered. We offer the fastest, most reliable delivery services at unbeatable rates.
                            </p>
                            <Link href={''} className='themeBtn' >Get Started</Link>
                        </div>
                        <figure>
                            <Image src={'/images/banner.png'} width={871} height={723} alt='Banner Image' />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBanner;
