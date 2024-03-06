'use client'

import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Link, Element, Events, scrollSpy } from 'react-scroll'
import TechStack from './techStack'
import LandingPageContent from './landingPageContent'
import Navbar from './navbar'
import Contact from './contact'
import About from './about'

function Home() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    scrollSpy.update()
  }, [activeSection])

  const handleSetActive = (to: any) => {
    setActiveSection(to);
  };

  return (
    <>
      <Navbar
        onSetLinkActive={handleSetActive}
        activeSection={activeSection}
        onHomeClick={() => setActiveSection('home')}
        onAboutClick={() => setActiveSection('about')}
        onContactClick={() => setActiveSection('contact')}
      />
      <Box w='100%' h='10vh' minH='80px' />
      <Box w={'100vw'} >
        <Element className='element' name='home'>
          <LandingPageContent />
          <TechStack />
        </Element>
        <Element className='element' name='about'>
          <About />
        </Element>
        <Element className='element' name='contact'>
          <Contact />
        </Element>
      </Box>
    </>
  )
}

export default Home