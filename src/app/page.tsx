'use client'

import { Text, Box, Flex, Image, Stack } from '@chakra-ui/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { data } from '../data'
import IconButton from './iconButton'

function Home() {

  const router = useRouter()

  return (
    <main className={styles.main}>
      <Flex flexDirection={'column'} w={'70%'} pl={10} alignSelf={'start'} >
        <Box w={[115, 125, 175, 225, 380, 550, 750]}>
          <Flex>
            <Text fontSize={['20', '25', '25', '25', '30', '35', '40']} color={'pinks.500'}>{data.name}</Text>
            <Image src='/julie.png' ml={5} boxSize={'8%'} borderRadius='full' alt='Picture of Julie Pinchak' />
          </Flex>
          <Text fontSize={['15', '20', '20', '20', '25', '30', '35']} color={'pinks.500'}>{data.title}</Text>
          <Text fontSize={20} color={'blues.500'}>{data.homeText}</Text>
        </Box>
        <Stack direction={'row'} w={'70%'} pt={4} alignSelf={'start'} spacing={2}>
          <IconButton color={'pinks.500'} icon={FaLinkedin} onClick={() => router.push('https://www.linkedin.com/in/julie-pinchak/')} />
          <IconButton color={'pinks.500'} icon={FaGithubSquare} onClick={() => router.push('https://github.com/jpinchak')} />
        </Stack>
      </Flex>
    </main>

  )
}

export default Home