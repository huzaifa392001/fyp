import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import serviceData from '../../Data/ServiceCardData.json'
import './ServicesSec.scss'
import SectionHeading from '../SectionHeading/SectionHeading'

function ServicesSec() {
    return (
        <>
            <section className='serviceSec'>
                <div className="container">
                    <div className="headingCont">
                        <SectionHeading heading={'Some Services We Offer'} />
                    </div>
                    <div className="cardRow">
                        {serviceData.map((data, index) => (
                            <div className="cardCol" key={index}>
                                <div className="serviceCard">
                                    <h4>{data.heading}</h4>
                                    <figure>
                                        <Image src={data.img} alt={data.heading + ' Image'} width={150} height={150} />
                                    </figure>
                                    <p>
                                        {data.description}
                                    </p>
                                    <Link href={'#'}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='aboutUsSec'>
                <div className="container">
                    <div className="aboutRow">
                        <figure>
                            <Image src={'/images/service.svg'} width={675} height={506} alt='Service Section Image' />
                        </figure>
                        <div className="content">
                            <h2>
                                Watch Your Delivery At Any Time
                            </h2>
                            <p>
                                With our app you can view the route of your order, from our local headquaters to the place where you are. Look for the app now!
                            </p>
                            <div className="btnCont">
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
        </>
    )
}

export default ServicesSec
