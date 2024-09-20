'use client'
import React, { useState } from 'react'
import AdminHeader from "@/Admin-ui/AdminHeader/AdminHeader"
import Sidebar from "@/Admin-ui/Sidebar/Sidebar"
import Login from "@/Components/Login/Login"

function AdminWrapper({ children }) {
    const [login, isLoggedIn] = useState(true)
    return (
        <>
            {login ? (
                <>
                    <AdminHeader />
                    <main className='mainAdminWrapper'>
                        <Sidebar />
                        <div className="innerWrapper">
                            {children}
                        </div>
                    </main>
                </>
            ) : <Login />}
        </>
    )
}

export default AdminWrapper