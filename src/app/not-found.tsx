

import { Heading, Flex, Text, Image, Box } from '@chakra-ui/react'
import StyledLink from './scrollButton'

export default function NotFound() {
  return (
    <Flex
      width={'100%'}
      flexDirection={'column'}
      alignItems={'center'}
      pt={'8vh'}
    >
      <Heading fontSize={25} color={'pinks.500'}>Not Found</Heading>
      <Text color="pinks.500">{`So sorry, looks like that link didn't work!`}</Text>
      <Text color="pinks.500">{`Here's a picture of Teddy to make up for that.`}</Text>
      <Image src='/teddy.jpg' alt='Picture of cute dog' width={'30vw'} borderRadius={'30'}/>
      {/* <StyledLink style='secondary' path='/' linkText='Home' /> */}
    </Flex>
  )
}