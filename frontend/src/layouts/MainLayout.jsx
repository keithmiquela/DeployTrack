import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-slate-900">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout