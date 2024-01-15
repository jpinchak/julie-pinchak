'use client'

import { Heading, Box, Flex } from '@chakra-ui/react'
import styles from './page.module.css'
import { Rammetto_One } from 'next/font/google';

const rammetto = Rammetto_One({ weight: '400', subsets: ['latin'] })

function Home() {
  return (
    <main className={styles.main}>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Heading color="white" fontSize={'70px'} pb={0} lineHeight={'65px'} className={rammetto.className}>
          JULIE
        </Heading>
        <Heading color="white" fontSize={'40px'} pt={0} lineHeight={'35px'} className={rammetto.className}>
          PINCHAK
        </Heading>
      </Flex>
    </main>

  )
}

export default Home