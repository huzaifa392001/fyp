'use client'
import React, { useState } from 'react'
import AdminHeader from "@/Admin-ui/AdminHeader/AdminHeader"
import Sidebar from "@/Admin-ui/Sidebar/Sidebar"
import Login from "@/components/Login/Login"
import { persistor, store } from '@/Redux/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { useSelector } from 'react-redux'

function AdminContent({ children }) {
    const isAdmin = useSelector((state) => state.admin.isAdmin); // useSelector is safe here
    return isAdmin ? (
        <>
            <AdminHeader />
            <main className="mainAdminWrapper">
                <Sidebar />
                <div className="innerWrapper">{children}</div>
            </main>
        </>
    ) : (
        <Login />
    );
}

function AdminWrapper({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AdminContent>{children}</AdminContent>
            </PersistGate>
        </Provider>
    );
}

export default AdminWrapper;
