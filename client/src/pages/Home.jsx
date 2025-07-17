import React from 'react'
import Hero from '../components/Hero.jsx';
import FeaturedDestination from '../components/FeaturedDestination.jsx';
import ExclusiveOffer from '../components/ExclusiveOffer.jsx';
import Testimonial from '../components/Testimonial.jsx';
import NewsLetter from '../components/NewsLetter.jsx';
import Footer from '../components/Footer.jsx';
function Home() {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffer />
        <Testimonial />
        <NewsLetter />
    </>
  )
}

export default Home
