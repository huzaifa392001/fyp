import Image from 'next/image'
import React from 'react'
import './InnerBanner.scss'

function InnerBanner(props) {
    return (
        <div className="innerBanner">
            <div className="container relative">
                <figure>
                    <Image
                        src={'/images/banner-element.png'}
                        alt=''
                        width={500}
                        height={500}
                    />
                </figure>
                <div className="content">
                    <h1>{props?.heading || 'Heading Here'}</h1>
                </div>
            </div>
        </div>
    )
}

export default InnerBanner