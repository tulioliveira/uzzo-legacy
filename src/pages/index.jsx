import React from 'react'
import Button from 'src/components/Button'
import Layout from 'src/Layout'
import Text from 'src/components/Text'
import View from 'src/components/View'
import Input from 'src/components/Input'
import Tab from 'src/components/Tab'
import LandingPage from 'static/images/landing.svg'
import { Link } from 'gatsby'

export default function Home() {
  return <Layout>
    <View flexDirection="row" alignItems="center" justifyContent="space-between" px={4} mt={4} mb={6}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Text type="h3" color="primary">Uzzo</Text>
    </Link>
      <View flexDirection="row" alignItems="center" justifyContent="flex-end">
        <Tab to="/" label="Projetos" />
        <Tab to="/" label="Sobre" />
        <Tab to="/" label="Contato" />
      </View>
    </View>
    <View flexDirection={['column', 'row', 'row', 'row']} alignItems="center" justifyContent="space-between" px={6} py={6}>
      <View flex={1} alignItems={['center', 'flex-start']} maxWidth="800px">
        <Text textAlign={['center', 'left']} type="h1" mb={1}>Uzzo Marcenaria</Text>
        <Text textAlign={['center', 'left']} my={2}>Acrílico, cristal, couro, metal, porcelana. Desde 1973 fornecendo sofisticação, luxo e modernidade em projetos comerciais e residenciais.</Text>
        <Button type="primary">Faça seu Projeto</Button>
      </View>
      <View flex={1} alignItems="center" justifyContent="center" my={[6, 0]}>
        <img src={LandingPage} width="90%" />
      </View>
    </View>
  </Layout>
}
