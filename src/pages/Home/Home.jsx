import React from 'react'
import Hero from '../../components/Hero/Hero'
import WWE from '../../components/WhyweExist/WWE'
import Themes from '../../components/Whattogain/WhatTG'
import HowItWorks from '../../components/howweoperate/HWO'
import CTA from '../../components/CTA/CTA'


const Home = () => {
  return (
    <>
        <Hero />
        <WWE />
        <Themes />
        <HowItWorks />
        <CTA />
    </>
  )
}

export default Home
