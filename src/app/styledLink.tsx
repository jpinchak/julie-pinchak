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
        colorScheme={style === 'primary' ? 'blues' : 'pinks'}
        variant='link'
        fontSize={20}
        fontWeight={'bold'}
      >
        {linkText}
      </Button>
    </Link>

  )
}

export default StyledLink