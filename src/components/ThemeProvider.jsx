import React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

const breakpoints = ['40em', '52em', '64em']
export const theme = {
  colors: {
    primary: '#523A34',
    accent: '#FFAD05',
    success: '#00c48c',
    error: '#ff647c',
    warning: '#ffcf5c',
    info: '#0084f4',
    black: '#1a051d',
    grey: '#3f3356',
    grey2: '#d0c9d6',
    grey3: '#e0e2e4',
    grey4: '#f7f5f9',
    white: '#ffffff',
    red: '#ff647c',
    red2: '#fdafbb',
    red3: '#fbe4e8',
    yellow: '#ffcf5c',
    yellow2: '#ffe29d',
    yellow3: '#fff8e7',
    orange: '#ffa26b',
    orange2: '#ffc7a6',
    orange3: '#ffe8da',
    green: '#00c48c',
    green2: '#7ddfc3',
    green3: '#d5f2ea',
    blue: '#0084f4',
    blue2: '#66b5f8',
    blue3: '#d5e9fa',
  },
  fontSizes: ['1.5rem', '1.75rem', '2rem', '2.5rem', '3rem', '4rem', '6rem', '8rem', '12rem', '24rem'],
  radii: {
    button: '6px',
    input: '6px'
  },
  space: ['0rem', '0.5rem', '1rem', '2rem', '3rem', '4rem', '8rem', '16rem', '32rem', '64rem'],
  borders: {
    input: '1px solid #ECEBED'
  },
  shadows: {
    input: 'none',
    inputHover: '0px 1px 9px rgba(0,0,0,0.14)'
  },
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  }
}

const ThemeProvider = ({ children }) => <StyledProvider theme={theme}>{children}</StyledProvider>

export default ThemeProvider