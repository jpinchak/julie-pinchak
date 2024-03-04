'use client'

import { Text, Box, Icon, VStack } from '@chakra-ui/react'
import { IconType } from 'react-icons';

function TechStackTile({name, iconName}: {name: string, iconName: IconType}) {

  return (
    <Box 
      bg='blues.600'
      w={'100px'}
      h={'120px'}
      my={2}
      borderRadius={'xl'}
      key={name}
    >
      <VStack>
        <Text as='b' color='pinks.300' textAlign='center'>{name}</Text>
        <Icon as={iconName} color='pinks.300' boxSize={16}/>
      </VStack>
    </Box>
  )
}

export default TechStackTile