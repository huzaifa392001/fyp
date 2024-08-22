import React from 'react'
import Header from '../Header/Header'

function Wrapper({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Wrapper