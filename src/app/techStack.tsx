import React from 'react'
import { Box, IconButton, Heading } from '@chakra-ui/react'
import TechStackTile from './techStackTile';
import Carousel from "react-multi-carousel";
import { data } from '../data'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

function CustomArrow({onClick, side} : {onClick?: any, side: string}) {
  return (
    <Box display='flex' className={`carousel-button-container-${side}`} alignContent='center' h='20vh' w='50px'>
    <IconButton
      w='40px'
      h='40px'
      bg='transparent'
      borderRadius='50%'
      className='carousel-button'
      icon={ side == 'left' ? 
        <ChevronLeftIcon color='blues.600' boxSize={'40px'} /> : <ChevronRightIcon color='blues.600' boxSize={'40px'} />
      } aria-label={`scroll ${side}`} onClick={() => onClick()}/>
    </Box>
  )
}

function TechStack() {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <Box className='techstack-divider' />
    <Box w={'100%'} h={'25vh'} minH={('200px')} className='techstack'>
    <Heading color='blues.600' fontSize={28} pb={3}>My Tech Stack</Heading>
    <Carousel
      partialVisbile={false}
      renderButtonGroupOutside={true}
      arrows
      responsive={responsive}
      containerClass="carousel-container"
      centerMode
      keyBoardControl={true}
      customRightArrow={<CustomArrow side='right' />}
      customLeftArrow={<CustomArrow side='left'/>}
    >
      {data.techStack.map(tile => (
        <TechStackTile
          name={tile.name}
          iconName={tile.iconName}
        />
      ))}
    </Carousel>
    </Box>
    </>
  )
}

export default TechStack
