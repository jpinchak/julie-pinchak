import { extendBaseTheme } from '@chakra-ui/react'

export const theme = extendBaseTheme({
  colors: {
    logo: {
      100: '#cc0066',
      200: '#ff0080',
      300: '#da1686',
      400: '#ffaa33',
      500: '#1edafe',
      600: '#18aecb'
    },
    neutral: {
      100: '#ffffff',
      200: '#f5f5f5',
      400: '#d3d3d3',
      500: '#a9a9a9',
      900: '#000000'
    },
    error: {
      500: '#a50000',
      600: '#8b0000' 
    },
  },
  fonts: {
    heading: `Rammetto One, sans-serif`,
    body: `Tenor Sans, sans-serif`,
  },
  textStyles: {
    primary: {
      fontFamily: `Tenor Sans, sans-serif`
    },
    secondary: {
      fontFamily: `Rammetto One, sans-serif`,
    }
  },
  styles: {
    global: () => ({
      body: {
        bg: 'linear-gradient(90deg, #1edafe 70%, #da1686 30%)'
      }
    })
  }
})