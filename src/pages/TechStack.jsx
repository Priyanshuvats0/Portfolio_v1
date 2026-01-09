import React from 'react'
import Slider from '../components/Slider'

const TechStack = () => {
  return (
    <div className='relative z-[100] bg-[#1F1F23] h-[120vh] w-full pt-44 px-20'>
      <span className='text-7xl tracking-tighter font-semibold text-white'>
        Tools I use to <br /> Create your website
      </span>
      <div className=''>
       <Slider/>
      </div>
    </div>
  )
}

export default TechStack