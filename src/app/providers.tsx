'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraBaseProvider } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import '@fontsource/cairo'
import '@fontsource/tenor-sans'
import { theme } from './theme'

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme} cssVarsRoot="body">
        {children}
      </ChakraBaseProvider>
    </CacheProvider>
  )
}