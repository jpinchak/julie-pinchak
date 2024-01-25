'use client'

import { Heading, Flex, Text, Box } from '@chakra-ui/react'
import { data } from '../../data'

function About() {

  const workExperience = data.workExperience.map(job => {
    return (
      <Flex flexDir='column'>
        <Text fontSize={'md'} fontWeight={700}>{`${job.company} (${job.companyDescriptor})`} </Text>
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'md'}>{job.jobTitle}</Text>
          <Text fontSize={'sm'}>{job.dates}</Text>
        </Flex>
        {job.description.map((description: string): React.ReactNode => {
          return <Text fontSize={'xs'}>{description}</Text>
        })}
        <Box height={5} />
      </Flex>
    )
  })

  const education = data.education.map(school => {
    return (
      <Flex flexDir='column'>
        <Text fontSize={'md'}>{school.name}</Text>
        <Text fontSize={'sm'}>{`${school.degree}, ${school.degreeDate}`}</Text>
      </Flex>
    )
  })

  return (
    <>
      <Heading color={'pinks.500'} fontSize={24} width={'70%'} py={5} textAlign={'center'}>
        About me
      </Heading>
      <Flex flexDir='column' width={'70%'} px={8} pb={10} alignContent={'flex-start'} color="black">
        <Heading color={'pinks.500'} fontWeight={700} fontSize={18}>
          Work Experience
        </Heading>
        {workExperience}
        <Heading color={'pinks.500'} fontWeight={700} fontSize={18}>
          Education
        </Heading>
        {education}
      </Flex>
    </>
  )
}

export default About