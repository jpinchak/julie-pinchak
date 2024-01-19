import Link from 'next/link'
import { Button } from '@chakra-ui/react'

type linkProps = {
  linkText: string;
  path: string;
  style?: 'primary' | 'secondary'
}

function StyledLink({ linkText, path, style = 'primary' }: linkProps) {
  return (
    <Link href={path} passHref>
      <Button 
        p={'8px'}
        color={style === 'primary' ? 'logo.500' : 'logo.200'}
        fontSize={20}
        fontWeight={'bold'}
        _hover={{color: style === 'primary' ? 'logo.600' : 'logo.300'}}
      >
        {linkText}
      </Button>
    </Link>

  )
}

export default StyledLink