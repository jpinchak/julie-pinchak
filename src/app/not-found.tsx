

import { Heading, Flex, Text, Image, Box } from '@chakra-ui/react'
import StyledLink from './styledLink'

export default function NotFound() {
  return (
    <Flex width={'100%'} flexDirection={'column'} alignItems={'center'} pt={100} color={'neutral.100'}>
      <Heading fontSize={25} color={'pinks.500'}>Not Found</Heading>
      <Text color="pinks.500">So sorry, looks like that link didn't work!</Text>
      <Text color="pinks.500">Here's a picture of Teddy to make up for that.</Text>
      <Box w={300} h={500} pt={15}>
        <Image src='/teddy.jpg' alt='Picture of cute dog' />
      </Box>
      <StyledLink style='secondary' path='/' linkText='Home' />
    </Flex>
  )
}