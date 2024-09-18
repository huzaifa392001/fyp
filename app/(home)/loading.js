import Image from 'next/image'
import React from 'react'

function loading() {
    return (
        <div className="preloader" >
            <Image src={'/images/logo.png'} width={300} height={102} alt="Website Logo" />
        </div>
    )
}

export default loading
