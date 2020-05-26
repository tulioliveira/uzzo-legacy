import React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

const theme = {
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
  fontSizes: ['12rem', '14rem', '16rem', '20rem', '24rem', '32rem', '48rem', '64rem', '90rem', '180rem'],
  radii: {
    button: '6px',
    input: '6px'
  },
  space: ['0rem', '4rem', '8rem', '16rem', '24rem', '32rem', '64rem', '128rem', '256rem', '512rem'],
  borders: {
    input: '1px solid #ECEBED'
  },
  shadows: {
    input: 'none',
    inputHover: '0px 1px 9px rgba(0,0,0,0.14)'
  },
  breakpoints: ['40em', '52em', '64em']
}

const ThemeProvider = ({ children }) => <StyledProvider theme={theme}>{children}</StyledProvider>

export default ThemeProvider