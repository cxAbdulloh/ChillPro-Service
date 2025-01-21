import React from 'react'
import Navbar from '../Navbar/Navbar'
import { HomePage } from '../HomePage/HomePage'
import SectionContainer from '../SectionContainer/SectionContainer'
import Map from '../Map/Map'
import ContactPage from '../ContactPage/ContactPage'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <SectionContainer/>
    {/* <About/>   */}
    <Map/>
    
    <Footer/>
    </>
  )
}

export default Home