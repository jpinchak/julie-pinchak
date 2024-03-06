'use client'

import { Box, Image, Flex, Show, Button } from '@chakra-ui/react'
import ScrollButton from './scrollButton'
import Menu from './menu'

type NavbarProps = {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  activeSection: string;
  onSetLinkActive: (to: string) => void;
}

function Navbar({ onHomeClick, onAboutClick, onContactClick, activeSection, onSetLinkActive}: NavbarProps) {
  return (
    <Flex justifyContent={'space-between'} minH={'80px'} h={'10vh'} w='100%' position='fixed' className='navbar'>
      <Flex>
        <Box p={2}><Image w={'12vw'} minW={'70px'} maxW={'110px'} src='/julie logo.png' alt='stars' /></Box>
      </Flex>
      <Show above='sm'>
        <Flex position={'absolute'} width={'100%'} height={'40px'} pr={6} m={0} justifyContent={'flex-end'} >
          <ScrollButton text='Home' onClick={onHomeClick} active={activeSection == 'home'} sectionName='home' onSetActive={() => onSetLinkActive('home')} />
          <ScrollButton text='About' onClick={onAboutClick} active={activeSection == 'about'} sectionName='about' onSetActive={() => onSetLinkActive('about')} />
          <ScrollButton text='Contact' onClick={onContactClick} active={activeSection == 'contact'} sectionName='contact' onSetActive={() => onSetLinkActive('contact')} />
          {/* <StyledLink path='/' linkText='Home' />
          <StyledLink path='/about' linkText='About me' />
          <StyledLink path='/contact' linkText='Get in touch' /> */}
        </Flex>
      </Show>
      <Show below='sm'>
        <Menu />
      </Show>
    </Flex>
  )
}

export default Navbar