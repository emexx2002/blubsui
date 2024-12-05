
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Conversion from '../components/Conversion'
import Tokenomics from '../components/Tokenomics'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='relative h-full min-h-screen bg-[#00bfff] text-xl'>
      <Header />
      <Hero />
      <Conversion />
      <Tokenomics />
      <Faq />
      <Footer />
    </div>
  )
}



export default HomePage
        