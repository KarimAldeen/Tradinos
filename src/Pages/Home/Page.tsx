import React from 'react'
import HeroSection from '../../Components/Home/HeroSection'
import OurProjects from '../../Components/Home/OurProjects'
import OurHow from '../../Components/Home/OurHow'
import Contact from '../../Components/Home/Contact'

const Page = () => {
  return (
    <div className="Home_Page">
      <HeroSection />
      <OurProjects />
      <OurHow/>
      <Contact/>
      
    </div>
  )
}

export default Page