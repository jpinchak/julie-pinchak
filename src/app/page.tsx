'use client'

import { Heading, Text, Box, Flex, Image, Stack } from '@chakra-ui/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { data } from '../data'
import IconButton from './iconButton'

function Home() {

  const router = useRouter()

  return (
    <main className={styles.main}>
      <Flex flexDirection={'column'} w={'70%'} pl={20} alignSelf={'start'} >
        <Flex 
          direction={['column', null, null, null, 'row', ]}
          pt={120}
          alignItems={['flex-start', null, null, null, 'flex-end']}
        >
          <Heading
            color="pinks.500"
            textStyle={'secondary'}
            fontSize={[15, 30, 30, 40, 50, 80]}
            lineHeight={['20px', '34px', '34px', '44px', '60px', '98px']}
          >
            JULIE
          </Heading>
          <Heading
            color="pinks.500"
            textStyle={'secondary'}
            fontSize={[12, 20, 22, 25, 40, 60]}
            pl={0}
          >
            pinchak
          </Heading>
        </Flex>
        <Box w={[200, 200, 200, 250, 450, 750]}>
          <Text fontSize={20} color={'pinks.500'}>{data.homeText}</Text>
        </Box>
        <Stack direction={'row'} w={'70%'} pt={4} alignSelf={'start'} spacing={2}>
          <IconButton icon={FaLinkedin} onClick={() => router.push('https://www.linkedin.com/in/julie-pinchak/')} />
          <IconButton icon={FaGithubSquare} onClick={() => router.push('https://github.com/jpinchak')} />
        </Stack>
      </Flex>
      <Box position={'absolute'} pt={125} boxSize={'20%'} right={'20%'} >
        <Image src='/julie.jpg' alt='Picture of Julie Pinchak' />
      </Box>
    </main>

  )
}

export default Home