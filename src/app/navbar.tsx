'use client'

import { Box, Image, Flex, Show } from '@chakra-ui/react'
import StyledLink from './styledLink'
import Menu from './menu'

function Navbar() {
  return (

    <Flex justifyContent={'space-between'} minH={'80px'} h={'10vh'}>
      <Flex>
        <Box h={'1vh'} maxW={'10vw'} pl={1}><Image src='/julie logo.png' alt='stars' /></Box>
      </Flex>
      <Show above='xl'>
        <Flex position={'absolute'} width={'100%'} height={'40px'} pr={6} m={0} justifyContent={'flex-end'} >
          <StyledLink path='/' linkText='Home' />
          <StyledLink path='/about' linkText='About me' />
          <StyledLink path='/contact' linkText='Get in touch' />
        </Flex>
      </Show>
      <Show below='xl'>
        <Menu />
      </Show>
    </Flex>
  )
}

export default Navbar