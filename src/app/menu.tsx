'use client'

import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Menu() {
  return (
    <ChakraMenu placement={'end'}>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon color='blues.500' />}
        size='lg'
        variant='ghost'
        float={'right'}
      />
      <MenuList>
        <MenuItem color='pinks.500' as={Link} href='/'>
          Home
        </MenuItem>
        <MenuItem as={Link} color='pinks.500' href='/about'>
          About Me
        </MenuItem>
        <MenuItem as={Link} color='pinks.500' href='/contact'>
          Get in touch
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  )
}

export default Menu