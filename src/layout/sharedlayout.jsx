import { useState } from 'react'
import Navbar from '../pages/navbar'
import { Outlet } from 'react-router-dom'
import UseTheme from '../hooks/useTheme'
import Footer from '../components/footer'
import Sidebar from '../pages/sidebar'

export default function Sharedlayout() {
      const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Navbar setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Outlet />
            <Footer />
        </div >
    )
}
