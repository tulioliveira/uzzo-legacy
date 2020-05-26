import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import 'src/index.css'

const Layout = ({ children }) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

export default Layout