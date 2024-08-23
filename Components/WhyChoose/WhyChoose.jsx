import React from 'react'
import './WhyChoose.scss'
import Link from 'next/link'
import Image from 'next/image'

function WhyChoose() {
    return (
        <section class="chooseSec">
            <div class="container mx-auto">
                <div class="cont">
                    <figure class="imgCont">
                        <Image
                            src={'/images/choose.png'}
                            fill
                            alt=''
                        />
                    </figure>
                    <div class="contentCont">
                        <h2>
                            Why Choose ParcelPro?
                        </h2>
                        <div class="content">
                            <h3>
                                Your Safety Comes First
                            </h3>
                            <p>
                                We prioritize your security by thoroughly vetting all our drivers with comprehensive background checks and real-time tracking, ensuring that your parcels are always in safe hands.
                            </p>
                        </div>
                        <div class="content">
                            <h3>
                                Commitment to Quality
                            </h3>
                            <p>
                                Your feedback is invaluable in helping us maintain the highest standards of service. We continuously strive to deliver the best experience with every delivery.
                            </p>
                        </div>
                        <div class="content">
                            <h3>
                                Transparent Pricing
                            </h3>
                            <p>
                                No hidden fees, no surprises. With ParcelPro, all charges are clearly outlined, so you always know exactly what you’re paying for each service.
                            </p>
                        </div>
                        <div class="btnCont">
                            <Link href='' >
                                <Image
                                    src={'/images/apple-store.svg'}
                                    width={150}
                                    height={40}
                                    alt=''
                                />
                            </Link>
                            <Link href='' >
                                <Image
                                    src={'/images/google-play.svg'}
                                    width={150}
                                    height={40}
                                    alt=''
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose