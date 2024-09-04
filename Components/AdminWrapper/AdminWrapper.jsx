'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

function AdminWrapper({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AdminWrapper