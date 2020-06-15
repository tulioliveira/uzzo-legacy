import React from 'react'
import View from 'src/components/View'
import Text from 'src/components/Text'

const Project = () => {

  return <View
    flexDirection={['column', 'row']}
    alignSelf="stretch"
    alignItems="center"
    justifyContent="space-between"
    mt={2}
    mb={4}
  >
    <View flex={[0, 1]} alignItems="center" justifyContent="center">
      <View width={['72px', '96px']}>
        <svg
          width="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
            fill="black"
          />
        </svg>
      </View>
    </View>
    <View flex={[0, 2]} alignItems="center" justifyContent="center">
      <Text type="h2" textAlign="center" m={3}>Projetos</Text>
      <Text maxWidth="700px" mx={3} my={1} textAlign="center">A UZZO Marcenaria executa projetos comerciais e residenciais.</Text>
      <Text maxWidth="700px" mx={3} my={1} textAlign="center">Ferramentas especiais, materiais tecnológicos como metal, couro natural e ecológico, acrílico, cristal, dentre outros, são de uso comum na marcenaria que já não é apenas marcenaria, mas uma empresa completa.</Text>
      <Text maxWidth="700px" mx={3} my={1} textAlign="center">Este conceito de empresa completa traz benefícios e conveniências para os profissionais de decoração e para os clientes, que receberam tudo ao mesmo tempo, com a mesma qualidade em um único centro de responsabilidade: a UZZO.</Text>
    </View>
    <View flex={[0, 1]} alignItems="center" justifyContent="center" display={['none', 'flex']}>
      <svg
        width="96px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6C1.34315 6 0 7.34315 0 9V16C0 17.6569 1.34315 19 3 19H21C22.6569 19 24 17.6569 24 16V9C24 7.34315 22.6569 6 21 6H3ZM9 8H7V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V8H3C2.44772 8 2 8.44772 2 9V16C2 16.5523 2.44772 17 3 17H21C21.5523 17 22 16.5523 22 16V9C22 8.44772 21.5523 8 21 8H19V11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11V8H15V13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13V8H11V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V8Z"
          fill="currentColor"
        />
      </svg>
    </View>
  </View>
}

export default Project