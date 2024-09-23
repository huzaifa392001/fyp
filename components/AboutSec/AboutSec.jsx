import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./AboutSec.scss"

function AboutSec({ props }) {
    return (
        <section className='aboutUsSec'>
            <div className="container">
                <div className="aboutRow">
                    <figure>
                        <Image src={'/images/aboutImg.svg'} width={675} height={506} alt='About section Image' />
                    </figure>
                    <div className="content">
                        <h2>
                            <span>
                                About Us
                            </span>
                            Find Out A Little More
                        </h2>
                        <p>
                            We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of dellivery.
                        </p>
                        {props?.showBtn && (
                            <Link className='themeBtn' href={'/about'}>Read More</Link>
                        )}
                    </div>
                </div>
                <div className="aboutRow">
                    <div className="content">
                        <h2>
                            Your Safety Is Important
                        </h2>
                        <p>
                            Each delivery is tracked in real-time, and both your parcels and trips are fully insured, whether you’re a shipper or a passenger. With ParcelPro, you can have complete peace of mind.
                        </p>
                    </div>
                    <figure>
                        <Image src={'/images/aboutImg2.svg'} width={675} height={506} alt='About section Image' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default AboutSec
