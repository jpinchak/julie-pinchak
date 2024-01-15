import { extendBaseTheme } from '@chakra-ui/react'

export const theme = extendBaseTheme({
  colors: {
    logo: {
      100: '#cc0066',
      200: '#ff0080',
      300: '#ff5f1f',
      400: '#ffaa33',
      500: '#ffea00'
    },
    neutral: {
      100: '#ffffff',
      200: '#f5f5f5',
      400: '#d3d3d3',
      500: '#a9a9a9',
      900: '#000000'
    }, 
    fonts: {
      heading: `'Rammetto One', sans-serif`
    }
  },
  styles: {
    global: () => ({
      body: {
        bg: '#00adb0'
      }
    })
  }
})