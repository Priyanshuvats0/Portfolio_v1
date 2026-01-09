import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './LandingPage'
import LocomotiveScroll from 'locomotive-scroll';
import Projects from './Projects';
import TechStack from './TechStack';

const Home = () => {
    const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
        <Navbar/>
        <LandingPage/>
        <Projects/>
        <TechStack/>
    </div>
  )
}

export default Home