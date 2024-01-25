import { extendBaseTheme } from '@chakra-ui/react'
import { modalTheme } from './modalTheme'
import { buttonTheme } from './buttonTheme'
import { menuTheme } from './menuTheme'

export const theme = extendBaseTheme({
  colors: {
    blues: {
      500: '#1edafe',
      600: '#18aecb',
      700: '#159cb6',
      800: '#138ba2'
    },
    pinks: {
      400: '#ff0080',
      500: '#da1686',
      600: '#cc0066',
      700: '#c41378',
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
  components: {
    Modal: modalTheme,
    Button: buttonTheme,
    Menu: menuTheme
  },
  breakpoints: {
    xs: '300px',
    sm: '450px',
    md: '750px',
    lg: '1200px',
    xl: '1400px',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'linear-gradient(90deg, #1edafe 70%, #da1686 30%)'
      }
    })
  }
})