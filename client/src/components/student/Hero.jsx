import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b
    from-cyan-100/70'>
      <h1 className='text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] relative font-bold text-gray-800 max-w-3xl mx-auto'>
        Unlock your potential with courses crafted 
        <span className='text-blue-600'> for your ambition.</span>
      </h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'
      >Mentora gives you access to skilled mentors, curated courses, and real-world tools—so you can learn better, faster, and with purpose</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'
      >Skilled mentors and curated courses to help you grow smarter.</p>
      <SearchBar />
    </div>
  )
}

export default Hero
