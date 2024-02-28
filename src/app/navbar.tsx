'use client'

import { Heading, Box, Image, Flex } from '@chakra-ui/react'
import StyledLink from './styledLink'

function Navbar() {
  return (

    <Flex justifyContent={'space-between'}>
      <Flex>
        <Box h={70} w={70} pl={1}><Image src='/julie logo.png' alt='stars' /></Box>
      </Flex>
      <Flex position={'absolute'} width={'100%'} height={'40px'} pr={6} m={0} justifyContent={'flex-end'} >
        <StyledLink path='/' linkText='Home' />
        <StyledLink path='/about' linkText='About me' />
        <StyledLink path='/contact' linkText='Get in touch' />
      </Flex>
    </Flex>
  )
}

export default Navbar