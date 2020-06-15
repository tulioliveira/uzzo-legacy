import React from 'react'
import LandingPage from 'static/images/landing.svg'
import View from 'src/components/View'
import Text from 'src/components/Text'
import Button from 'src/components/Button'
import { motion } from 'framer-motion'
import { theme } from 'src/components/ThemeProvider'
import Media from 'react-media'

const AnimatedView = motion.custom(View)

const Title = () => {
  return <Media queries={theme.mediaQueries}>
      {matches => {
        console.log(theme.mediaQueries)
        console.log(matches)
        return <>
        <View flexDirection={['column', 'row', 'row', 'row']} alignItems="center" justifyContent="space-between" px={4} py={6}>
          <AnimatedView
            flex={[0, 1]}
            alignItems={['center', 'flex-start']}
            maxWidth="800px"
            style={{ opacity: 0 }}
            animate={{ opacity: [0, 1], [matches.small ? 'x' : 'y']: [-5, 0] }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <Text textAlign={['center', 'left']} type="h1" mb={1}>Qualidade ao seu alcance</Text>
            <Text textAlign={['center', 'left']} my={2}>Acrílico, cristal, couro, metal, porcelana. Desde 1973 fornecendo sofisticação, luxo e modernidade em projetos comerciais e residenciais.</Text>
            <Button type="primary">Faça seu Projeto</Button>
          </AnimatedView>
          <AnimatedView
            flex={[0, 1]}
            alignItems="center"
            justifyContent="center"
            mt={[6, 0]}
            mb={[4, 0]}
            style={{ opacity: 0 }}
            animate={{ opacity: [0, 1], [matches.small ? 'x' : 'y']: [5, 0] }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <img src={LandingPage} width="90%" alt="Splash Art" />
          </AnimatedView>
        </View>
      </>}}
  </Media>
}

export default Title