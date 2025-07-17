import React from 'react'
import Title from './Title.jsx';
import StarRating from './StarRating.jsx';
import { testimonials } from '../assets/assets.js';
function Testimonial() {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 big-slate-50 py-20 pt-20 pb-20'>
      <Title title="What Our Guests Say" subTitle="Read the experiences of our satisfied guests." />
             
            <div className="flex flex-wrap items-center gap-6 mt-20">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                          <StarRating />
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>

    
  )
}

export default Testimonial
