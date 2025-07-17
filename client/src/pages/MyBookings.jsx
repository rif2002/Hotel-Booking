import React from 'react'
import Title from '../components/Title.jsx';
import { userBookingsDummyData } from '../assets/assets';
import { useState } from 'react';
import { assets } from '../assets/assets';
function MyBookings() {
    const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className='py-28 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title title='My Bookings' subtitle='Easily manage your bookings and reservations '  align='left'/>
     
      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:flex md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-3 font-medium text-base'>
            <div className='w-3/6'>Hotels</div>
            <div className='w-2/6'>Date & Timings</div>
            <div className='w-1/6'>Payment</div>
        </div>
        {bookings.map((booking)=>(
            <div key={booking._id} className='grid grid-cols-1  md:grid-cols-[3fr_2fr_1fr] w-full py-6  border-b border-gray-300 first:border-t'>
                       {/*------------hotel details*/}
                       <div className='flex flex-col md:flex-row  '>
                         <img src={booking.room.images[0]} alt="hotel-img" 
                         className='min-md:w-44 rounded shadow mr-6 object-cover'/>
                         <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:mt-4'>
                            <p className='font-playfair text-2xl'>{booking.hotel.name}
                                 <span className='text-sm font-inter'> ({booking.room.roomType})</span>
                            </p>
                            <div className='flex items-center gap-1 text-xs text-gray-500 '>
                                <img src={assets.locationIcon} alt="location-icon" />
                                <span>{booking.hotel.address}</span>
                            </div>
                             <div className='flex items-center gap-1 text-xs text-gray-500 '>
                                <img src={assets.guestsIcon} alt="guest-icon" />
                                <span>Guests: {booking.guests}</span>
                            </div>
                            <p className='text-base'>Total: ${booking.totalPrice}</p>
                           

                         </div>
                       </div>

                        {/*------------hotel details----------*/}
                       <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                        <div>
                            <p>Check-In:</p>
                            <p  className='text-xs text-gray-500'>{new Date(booking.checkInDate).toDateString()}</p>
                        </div>
                        <div>
                            <p>Check-Out:</p>
                            <p  className='text-xs text-gray-500'>{new Date(booking.checkOutDate).toDateString()}</p>
                        </div>
                       </div>

                        {/*------------hotel details----------*/}
                      <div className='flex flex-col items-start justify-center pt-3'>
                        <div className='flex items-center gap-2'>
                            <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <p className={`text-sm ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>{booking.isPaid?"  Paid":"  Not Paid"}</p>

                        </div>

                            {!booking.isPaid && (
                                <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>Pay Now</button>
                            )}
                      </div>
             
            </div>
        ))}


      </div>
    </div>
  )
}

export default MyBookings
