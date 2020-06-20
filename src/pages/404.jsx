import React from 'react'
import View from 'src/components/View'
import Text from 'src/components/Text'
import ThemeProvider from 'src/components/ThemeProvider'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Page404 = ({ data }) => {
  console.log(data)

  return (
    <ThemeProvider>
      <View width="90vw" height="90vh" padding="5vh 5vw" alignItems="center" justifyContent="center">
        <Text type="h2" color="primary" mb={6} textAlign="center">Uzzo Marcenaria</Text>
        <div style={{ width: '100%' }}>
          <Img fluid={data.image404.childImageSharp.fluid} style={{ margin: "0 auto" }} />
        </div>
        <Text type="h1" color="primary" my={3} textAlign="center">Erro 404</Text>
        <Text type="h4" textAlign="center">Página não encontrada. <Link to="/">Voltar para o início</Link></Text>
      </View>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    image404: file(relativePath: { eq: "site-constructor.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default Page404
