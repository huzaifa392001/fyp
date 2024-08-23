'use client'
import React from 'react';
import './mainBanner.scss'
import Tabs from './Tabs/Tabs';
import Banner from './Banner/Banner';

function MainBanner() {

    return (
        <section className='py-0'>
            <div className="mainBanner">
                <div className="content">
                    <h1>
                        Your Ultimate Parcel Delivery Solution
                    </h1>
                    <p>
                        Whether you need to send a package across the city or get something delivered to your doorstep, our
                        app has got you covered. We offer the fastest, most reliable delivery services at unbeatable rates.
                        From business deliveries to personal errands, we make sure your packages reach their destination
                        safely and on time.
                    </p>
                </div>
            </div>
            <Tabs />
            <Banner />
        </section>
    );
}

export default MainBanner;
