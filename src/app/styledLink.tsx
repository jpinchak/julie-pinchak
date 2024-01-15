import Link from 'next/link'
import { Button } from '@chakra-ui/react'

type linkProps = {
  linkText: string;
  path: string;
}

function StyledLink({ linkText, path }: linkProps) {
  return (
    <Link href={path} passHref>
      <Button p={'8px'} _hover={{color: 'neutral.400'}}>
        {linkText}
      </Button>
    </Link>

  )
}

export default StyledLink