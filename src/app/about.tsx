'use client'

import { useState } from 'react'
import {
  Flex,
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import { data } from '../data'
import Tile from './tile'

function About() {

  const workExperience = data.workExperience.map((job, iterator) => {
    return (
      <Flex flexDir='column' key={iterator}>
        <Text fontSize={'md'} fontWeight={700}>{`${job.company} (${job.companyDescriptor})`} </Text>
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'md'}>{job.jobTitle}</Text>
          <Text fontSize={'sm'}>{job.dates}</Text>
        </Flex>
        {job.description.map((description: string, iterator: number): React.ReactNode => {
          return <Text key={iterator} fontSize={'xs'}>{description}</Text>
        })}
        <Box height={5} />
      </Flex>
    )
  })

  const education = data.education.map(school => {
    return (
      <Flex flexDir='column' key={school.name}>
        <Text fontSize={'md'}>{school.name}</Text>
        <Text fontSize={'sm'}>{`${school.degree}, ${school.degreeDate}`}</Text>
      </Flex>
    )
  })

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs bg='blues.500' w={'100%'} p={2} onChange={index => setTabIndex(index)}>
      <TabList width={'100%'} mb={5}>
        <Tab width='100%'><Tile headingText='Past work' isActive={tabIndex == 0} width='100%' /></Tab>
        <Tab width='100%'><Tile headingText='Education' isActive={tabIndex == 1} width='100%' /></Tab>
        <Tab width='100%'><Tile headingText='About' isActive={tabIndex == 2} width='100%' /></Tab>
      </TabList>
      <TabPanels>
        <TabPanel h={['1050px', '1000px', '950px', '750px', '550px', '475px']}>
          {workExperience}
        </TabPanel>
        <TabPanel>
          {education}
        </TabPanel>
        <TabPanel>
          <Text fontSize='md'>
            {data.AboutText}
          </Text>
        </TabPanel>
      </TabPanels>




    </Tabs>
  )
}

export default About