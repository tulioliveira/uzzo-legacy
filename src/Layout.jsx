import React from 'react'
import ThemeProvider from 'src/components/ThemeProvider'
import View from 'src/components/View'
import 'src/index.css'

const Layout = ({ children }) => {
  return <ThemeProvider>
    <View maxWidth="1400px" margin="0px auto">
      {children}
    </View>
  </ThemeProvider>
}

export default Layout