'use client'

import { Heading, Text, Box, Flex, Image } from '@chakra-ui/react'
import styles from './page.module.css'
import { data } from '../data'

function Home() {
  return (
    <main className={styles.main}>
      <Flex flexDirection={'column'} w={'70%'} pl={20} alignSelf={'start'} >
        <Flex direction={'row'} pt={120} alignItems={'flex-end'}>
          <Heading color="logo.300" textStyle={'secondary'} fontSize={80} lineHeight={'98px'}>
            JULIE
          </Heading>
          <Heading color="logo.300" textStyle={'secondary'} fontSize={60} pl={0} >
            pinchak
          </Heading>
        </Flex>
        <Box w={750}>
          <Text fontSize={20} color={'logo.300'}>{data.homeText}</Text>
        </Box>
      </Flex>
      <Box position={'absolute'} pt={125} boxSize={'20%'} right={'20%'} >
      <Image src='/julie.jpg' alt='Picture of Julie Pinchak' />
      </Box>
    </main>

  )
}

export default Home