'use client'

import { useState, LegacyRef, useRef, forwardRef, RefObject, ForwardedRef } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { motion, HTMLMotionProps } from 'framer-motion'
import CustomStarIcon from './customStarIcon'

type TileProps = {
  headingText: string;
  width?: string;
  isActive?: boolean;
}

const MotionStarComponent = forwardRef<HTMLHeadingElement, any>(({}, ref) => {
  return <div ref={ref}>
    <CustomStarIcon color='#da1686' size={7} />
  </div>
})

MotionStarComponent.displayName = 'MotionStarComponent'
const MotionStarIcon = motion(MotionStarComponent)

function Tile({ headingText, width ='20vw', isActive = false }: TileProps) {

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
      bg={isActive ? 'pinks.300' : 'pinks.200'}
      w={width}
      minW='90px'
      h={'10vh'}
      mx={1}
      pt={3}
      whileHover={{ boxShadow: '0px 0px 10px #da1686'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MotionStarIcon 
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
      />
      <Heading fontSize={[14, 16, 18, 20, 22, 24]} color='blues.500'>{headingText}</Heading>
    </Box>
  )
}

export default Tile