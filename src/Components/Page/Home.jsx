import React from 'react'
import Navbar from '../Navbar/Navbar'
import { HomePage } from '../HomePage/HomePage'
import SectionContainer from '../SectionContainer/SectionContainer'
import Map from '../Map/Map'
import Footer from '../Footer/Footer'
import About from '../About/About'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <SectionContainer/>
    <About/>  
    <Map/> 
    <Footer/>
    </>
  )
}

export default Home