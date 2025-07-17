import React from 'react'
import Navbar from './components/Navbar.jsx';
import {Routes, Route , useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import AllRooms from './pages/AllRooms.jsx';
import RoomDetail from './pages/RoomDetail.jsx';
import MyBookings from './pages/MyBookings.jsx';
import HotelReg from './components/HotelReg.jsx';
import Lay from './pages/HotelOwner/Lay.jsx';
import Dashboard from './pages/HotelOwner/Dashboard.jsx';
import AddRoom from './pages/HotelOwner/AddRoom.jsx';
import ListRoom from './pages/HotelOwner/ListRoom.jsx';
function App() {
  const isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div  className="flex flex-col min-h-screen">
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div   className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Lay />} >
               <Route index element={<Dashboard />} />
               <Route path="add-room" element={<AddRoom />} />
               <Route path="list-room" element={<ListRoom />} />

          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
