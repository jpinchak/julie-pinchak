'use client'

import { useState, forwardRef } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { motion, HTMLMotionProps } from 'framer-motion'
import CustomStarIcon from './customStarIcon'
import TechStackTile from './techStackTile'
import { SiStorybook } from "react-icons/si";

type CustomStarIconProps<T> = { 
  color: string;
  size?: string;
  children?: T
} & HTMLMotionProps<'div'>

const MotionStarComponent = forwardRef<HTMLDivElement, CustomStarIconProps<any>>((props, ref) => {
  return <div ref={ref}>
    <CustomStarIcon color={props.color} />
  </div>
})

const MotionStarIcon = motion(MotionStarComponent)

function Tile({ headingText, width ='20vw' }: {headingText: string, width?: string}) {

  const [ isHovered, setIsHovered ] = useState(false)

  return (
    <Box
      as={motion.div}
      display='flex'
      flexDir={'column'}
      alignItems={'center'}
      borderRadius='lg'
      border={'solid 1px'}
      borderColor='pinks.500'
      bg='pinks.200'
      w={width}
      h={'20vh'}
      pt={3}
      whileHover={{ boxShadow: '0px 0px 10px #da1686'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MotionStarIcon 
        color='#da1686'
        size={'200px'}
        onClick={() => console.log('click')}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
      />
      <Heading fontSize={24} color='blues.500'>{headingText}</Heading>
    </Box>
  )
}

export default Tile