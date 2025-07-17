import React from 'react'
import Title from '../../components/Title' 
import { assets, dashboardDummyData } from '../../assets/assets.js';
import { useState } from 'react'
function Dashboard() {
    const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
     <Title align='left' font='outfit' title='Dashboard' subTitle='Manage your hotel rooms and bookings' />
        <div className='flex gap-4 main-content pb-10'>
        {/*----Total Booking-------*/}
    
             <div className='bg-primary/3 border border-primary/10 p-4 pr-8 rounded mt-6'>
                 <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
                 <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Booking</p>
                    <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
                 </div>
             </div>

       
             {/*----Total Revenue-------*/}
             <div className='bg-primary/3 border border-primary/10 p-4 pr-8 rounded mt-6'>
                 <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10' />
                 <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Revenue</p>
                    <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
                 </div>
             </div>

        </div>

           {/*----Recent Bookings-------*/}
            <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg  overflow-y-scroll'>
              
                 <table className='w-full'> 
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>

                        </tr>
                    </thead>

                    <tbody className='text-sm'>
                        {dashboardData.bookings.map((item, index) => (
                            <tr key={index} className='border-b border-gray-200'>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300  max-sm:hidden'>{item.room.roomType}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>${item.totalPrice}</td>
                                <td className={'py-3 px-4 flex border-t border-gray-300'}>
                                    <button className={`py-1 px-3 rounded-full text-xs mx-auto ${item.isPaid ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {item.isPaid ? 'Completed' : 'Pending'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
         
          
    </div>
  )
}

export default Dashboard
