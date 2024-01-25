'use client'

import { Flex } from '@chakra-ui/react'
import StyledLink from './styledLink'

function Navbar() {
  return (
    <Flex position={'absolute'} width={'100%'} height={'40px'} pr={6} m={0} justifyContent={'flex-end'} >
      <StyledLink path='/' linkText='Home' />
      <StyledLink path='/about' linkText='About me' />
      <StyledLink path='/contact' linkText='Get in touch' />
    </Flex>
  )
}

export default Navbar