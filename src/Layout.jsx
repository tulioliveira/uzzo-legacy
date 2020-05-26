import React from 'react'
import ThemeProvider from 'src/components/ThemeProvider'
import 'src/index.css'

const Layout = ({ children }) => {
  return <ThemeProvider>
    {children}
  </ThemeProvider>
}

export default Layout