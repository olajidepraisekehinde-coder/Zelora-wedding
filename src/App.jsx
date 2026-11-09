
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Dresses from './pages/dresses'
import Service from './pages/service'
import Contact from './pages/contact'
import Sharedlayout from './layout/sharedlayout'
import Component from './pages/home'
import UseTheme from './hooks/useTheme'

function App() {
const {darkMode}=UseTheme()
    return (
    <BrowserRouter>
     <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark-theme" : "light-theme" }`}>
        <Routes>
            <Route path="/" element={<Sharedlayout />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dresses" element={<Dresses />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="*" element={<Error />} /> */}
            </Route>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
