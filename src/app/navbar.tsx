'use client'

import { Flex } from '@chakra-ui/react'
import StyledLink from './styledLink'

function Navbar() {
  return (
    <Flex position={'absolute'} width={'100%'} height={'40px'} pr={6} m={0} justifyContent={'flex-end'} >
      <StyledLink path='/about' linkText='About me' />
      <StyledLink path='/contact' linkText='Get in touch' />
      <StyledLink path='/teddy' linkText='Meet my pup' />
    </Flex>
  )
}

export default Navbar