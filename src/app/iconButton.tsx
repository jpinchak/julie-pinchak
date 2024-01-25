import { Button, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons';

type IconButtonProps = {
  icon: IconType;
  color?: string;
  size?: number;
  onClick: () => void
}

function IconButton({ icon, onClick, color = 'logo.300', size = 8}: IconButtonProps) {
  return (
    <Button onClick={onClick} background={'transparent'} p={0} minW={5}>
      <Icon as={icon} color={color} boxSize={size} />
    </Button>
  )
}

export default IconButton