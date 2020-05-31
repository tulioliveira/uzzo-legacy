import React from 'react'
import View from 'src/components/View'
import Text from 'src/components/Text'
import { Link } from 'gatsby'
import Tab from 'src/components/Tab'
import { motion } from 'framer-motion'

const AnimatedView = motion.custom(View)

const Header = () => {

  return <AnimatedView
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    px={4}
    mt={4}
    mb={6}
    style={{ opacity: 0 }}
    animate={{ opacity: [0, 1], y: [-5, 0] }}
    transition={{ ease: 'easeInOut', duration: 0.75 }}
  >
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Text type="h3" color="primary">Uzzo</Text>
    </Link>
    <View flexDirection="row" alignItems="center" justifyContent="flex-end">
      <Tab to="/" label="Projetos" />
      <Tab to="/" label="Sobre" />
      <Tab to="/" label="Contato" />
    </View>
  </AnimatedView>
}

export default Header