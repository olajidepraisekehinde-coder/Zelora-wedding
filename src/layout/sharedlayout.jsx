import React from 'react'
import Navbar from '../pages/navbar'
import { Outlet } from 'react-router-dom'
import UseTheme from '../hooks/useTheme'
import Footer from '../components/footer'

export default function Sharedlayout() {
    const { darkMode } = UseTheme()
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div >
    )
}
