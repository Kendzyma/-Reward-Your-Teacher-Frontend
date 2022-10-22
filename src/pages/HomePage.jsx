import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/HomePage/footer/footer'
import HowItWorks from '../components/HomePage/HowItWorks/HowItWorks'
import Navbar from '../components/HomePage/navbar/navbar'
import Partners from '../components/HomePage/Partners/Partners'
import Sendinstantpage from '../components/HomePage/SendInstantPage/Sendinstantpage'
import SurpriseFunds from '../components/HomePage/SupriseFunds/SurpriseFunds'
import TeachersReward from '../components/HomePage/TeachersReward/TeachersReward'
const HomePage = () =>{
    return(
<section>
    <Navbar/>
    <Sendinstantpage/>
   <HowItWorks/>
   <SurpriseFunds/>
   <TeachersReward/>
   <Partners/>
  <Footer/>
  <Outlet/> 
</section>
    )
}

export default HomePage