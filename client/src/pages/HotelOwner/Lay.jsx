import React from 'react'
import Navbar from '../../components/HotelOwner/Navbar.jsx'
import SideBar from '../../components/HotelOwner/SideBar.jsx'
import { Outlet } from 'react-router-dom'


function Lay() {
  return (
    <div>
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <SideBar />
                <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lay
