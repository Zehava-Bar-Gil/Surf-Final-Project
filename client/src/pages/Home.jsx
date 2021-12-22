import React, { useState, Fragment } from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import HeroSection from '../components/HeroSection/index';
import InfoSection from './InfoSection';
import { about, forecast, signup, shop, gallery } from './data';
import Footer from '../components/Footer/index';
import Gallery from './Gallery';
import Shop from '../shop/index';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...about} />
        {/* <InfoSection {...shop} /> */}
        <Shop />
        <Gallery />
        <InfoSection {...signup} />
        <Footer />
    </>
}

export default Home
