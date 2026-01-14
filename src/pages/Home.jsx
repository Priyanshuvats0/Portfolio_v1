import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './LandingPage'
import LocomotiveScroll from 'locomotive-scroll';
import Projects from './Projects';
import TechStack from './TechStack';
import Projects_v2 from './Projects_v2';
import Footer from './Footer';

const Home = () => {
    const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
        <Navbar/>
        <LandingPage/>
        <Projects_v2/>
        <TechStack/>
    </div>
  )
}

export default Home