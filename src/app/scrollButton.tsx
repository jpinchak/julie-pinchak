import { Button } from '@chakra-ui/react'
import { Link, Element, Events, scrollSpy } from 'react-scroll'

type ButtonProps = {
  sectionName: string;
  text: string;
  onClick: () => void;
  active: boolean;
  onSetActive: () => void;
}

function ScrollButton({ text, onClick, active = false, sectionName, onSetActive }: ButtonProps) {
  return (
    <Link to={sectionName} spy={true} onSetActive={onSetActive} offset={sectionName == 'home' ? -80 : 0}>
      <Button
        p={'8px'}
        color={active ? 'blues.600' : 'blues.500'}
        _hover={{ color: '#076a63' }}
        variant='ghost'
        fontSize={20}
        fontWeight={'bold'}
        onClick={onClick}
      >
        {text}
      </Button>
    </Link>


  )
}

export default ScrollButton