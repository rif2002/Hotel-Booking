import React from 'react'
import { roomsDummyData } from '../assets/assets'
import Hotelcard from './Hotelcard.jsx'
import Title from './Title.jsx'
import { useNavigate } from 'react-router-dom'
function FeaturedDestination() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 big-slate-50 pt-20'>
        
        <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'/>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-12'>
        {roomsDummyData.slice(0,4).map((room, index) => (
          <Hotelcard key={room._id} room={room} index={index} />
        ))}
      </div>
      
        <button onClick={()=>{ navigate('/rooms'); scrollTo(0,0) }}
        className='mt-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        View All Destinations
        </button>

    </div>
  )
}

export default FeaturedDestination
