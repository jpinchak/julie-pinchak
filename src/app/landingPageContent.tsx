import React, { RefObject, useRef } from 'react'
import { Text, Box, Flex, Image, Stack, Button } from '@chakra-ui/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { data } from '../data'
import IconButton from './iconButton'

function LandingPageContent() {

  const router = useRouter()

  return (
      <Box className='landing' pb={8} pt={'12vh'} px={5} h={'60vh'}>
  <Flex pb={10}>
    <Text fontSize={['20', '25', '25', '25', '30', '35', '40']} fontFamily={`'Cairo', sans-serif`} color={'pinks.500'}>{data.name}</Text>
    <Image src='/julie.png' ml={5} h={'65px'} borderRadius='full' alt='Picture of Julie Pinchak' />
  </Flex>
  <Text fontSize={['15', '20', '20', '20', '25', '30', '35']} color={'pinks.500'}>{data.title}</Text>
  <Text fontSize={20} color={'blues.500'}>{data.homeText}</Text>
  <Stack direction={'row'} w={'100%'} pt={4} alignSelf={'start'} spacing={2}>
    <IconButton color={'pinks.500'} icon={FaLinkedin} onClick={() => router.push('https://www.linkedin.com/in/julie-pinchak/')} />
    <IconButton color={'pinks.500'} icon={FaGithubSquare} onClick={() => router.push('https://github.com/jpinchak')} />
  </Stack>
  </Box>
  )
}

export default LandingPageContent