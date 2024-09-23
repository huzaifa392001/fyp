import Image from 'next/image'
import React from 'react'
import './ImgCard.scss'
import Link from 'next/link'

function ImgCard({ heading, description, img, url }) {
    return (
        <div className="imgCard">
            {img && (
                <figure>
                    <Image
                        src={img}
                        fill
                        alt=''
                    />
                </figure>
            )}
            <div className="content">
                <h3>
                    {heading ? heading : ''}
                </h3>
                <p>
                    {description ? description : ''}
                </p>
                <Link href={url ? url : ''} >
                    Learn More
                    <i className="fas fa-long-arrow-right" />
                </Link>
            </div>
        </div>
    )
}

export default ImgCard