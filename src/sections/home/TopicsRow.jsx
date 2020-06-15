import React from 'react'
import View from 'src/components/View'
import Text from 'src/components/Text'

const TopicsRow = () => {

  return <View
    flexDirection="column"
    alignSelf="stretch"
    alignItems="stretch"
    justifyContent="space-between"
    my={[0, 6]}
  >
    <View flexDirection={['column-reverse', 'row']} alignItems="center" justifyContent={['flex-start', 'space-between']}>
      <View flex={[0, 1]} justifyContent="center" p={[4, 4]} pt={[1, 4]} my={[3, 0]}>
        <Text type="h2" textAlign={['center', 'left']}>Acabamento</Text>
        <Text mt={3} textAlign={['center', 'left']}>O impecável acabamento com as mais diversas bases que conferem o luxo e sofisticação aos projetos. A secagem por infravermelho também mantem a qualidade mesmo depois da aplicação dos materiais. As ferragens (italianas e alemãs) utilizadas, que revelam o primor destinado ao projeto da marcenaria, são instrumentos insubstituíveis na execução dos mais modernos projetos concebidos por profissionais gabaritados.</Text>
      </View>
      <View width={['72px', '96px']} p={[1, 4]}>
        <svg
          width="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.20348 2.00378C9.46407 2.00378 10.5067 3.10742 10.6786 4.54241L19.1622 13.0259L11.384 20.8041C10.2124 21.9757 8.31291 21.9757 7.14134 20.8041L2.8987 16.5615C1.72713 15.3899 1.72713 13.4904 2.8987 12.3188L5.70348 9.51404V4.96099C5.70348 3.32777 6.82277 2.00378 8.20348 2.00378ZM8.70348 4.96099V6.51404L7.70348 7.51404V4.96099C7.70348 4.63435 7.92734 4.36955 8.20348 4.36955C8.47963 4.36955 8.70348 4.63435 8.70348 4.96099ZM8.70348 10.8754V9.34247L4.31291 13.733C3.92239 14.1236 3.92239 14.7567 4.31291 15.1473L8.55555 19.3899C8.94608 19.7804 9.57924 19.7804 9.96977 19.3899L16.3337 13.0259L10.7035 7.39569V10.8754C10.7035 10.9184 10.7027 10.9612 10.7012 11.0038H8.69168C8.69941 10.9625 8.70348 10.9195 8.70348 10.8754Z"
            fill="#523a34"
          />
          <path
            d="M16.8586 16.8749C15.687 18.0465 15.687 19.946 16.8586 21.1175C18.0302 22.2891 19.9297 22.2891 21.1013 21.1175C22.2728 19.946 22.2728 18.0465 21.1013 16.8749L18.9799 14.7536L16.8586 16.8749Z"
            fill="#523a34"
          />
        </svg>
      </View>
    </View>
    <View flexDirection={['column-reverse', 'row-reverse']} alignItems="center" justifyContent={['flex-start', 'space-between']}>
      <View flex={[0, 1]} justifyContent="center" p={[4, 4]} pt={[1, 4]} my={[3, 0]}>
        <Text type="h2" textAlign={['center', 'right']}>Meio Ambiente</Text>
        <Text mt={3} textAlign={['center', 'right']}>A estrutura de seus projetos vem de madeiras maciças do manejo de reflorestamento e o MDF (fibra de madeira reflorestada), ambos certificados. O uso de produtos à base de água e biodegradáveis, a consciência interna de coleta seletiva, a iluminação e ventilação natural de seus galpões de produção fazem da UZZO uma empresa com consciência ecológica e ambientalmente correta.</Text>
      </View>
      <View width={['72px', '96px']} p={[1, 4]}>
        <svg
          width="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7401 16.3185C12.035 17.1126 11.0808 17.6806 10 17.9V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V17.9C5.71776 17.4367 4 15.419 4 13V7C4 4.23858 6.23858 2 9 2C11.6087 2 13.7508 3.99781 13.9797 6.54693C14.5726 6.1993 15.2631 6 16 6C18.2091 6 20 7.79086 20 10V14C20 15.8638 18.7252 17.4299 17 17.874V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17.874C14.0747 17.6358 13.279 17.075 12.7401 16.3185ZM12 7V13C12 14.3062 11.1652 15.4175 10 15.8293V13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13V15.8293C6.83481 15.4175 6 14.3062 6 13V7C6 5.34315 7.34315 4 9 4C10.6569 4 12 5.34315 12 7ZM17 15.7324V13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13V15.7324C14.4022 15.3866 14 14.7403 14 14V10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10V14C18 14.7403 17.5978 15.3866 17 15.7324Z"
            fill="#3abf7c"
          />
        </svg>
      </View>
    </View>
    <View flexDirection={['column-reverse', 'row']} alignItems="center" justifyContent={['flex-start', 'space-between']}>
      <View flex={[0, 1]} justifyContent="center" p={[4, 4]} pt={[1, 4]} my={[3, 0]}>
        <Text type="h2" textAlign={['center', 'left']}>Clientes</Text>
        <Text mt={3} textAlign={['center', 'left']}>A preocupação com nossos clientes externos é tão importante quanto à preocupação com nossos clientes internos – nossos colaboradores. A UZZO tem consciência de que sua equipe deve ser coesa, interativa, comunicativa e responsável afinal o trabalho é fruto de um conjunto de pessoas que buscam fazer e atender bem. É por isso que o treinamento aos colaboradores, com diverss “situações-problemas” para serem discutidas e solucionadas é o foco da UZZO.</Text>
      </View>
      <View width={['72px', '96px']} p={[1, 4]}>
        <svg
          width="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
            fill="#3f3356"
          />
          <path
            d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
            fill="#3f3356"
          />
          <path d="M22 11H16V13H22V11Z" fill="#3f3356" />
          <path d="M16 15H22V17H16V15Z" fill="#3f3356" />
          <path d="M22 7H16V9H22V7Z" fill="#3f3356" />
        </svg>
      </View>
    </View>
  </View>
}

export default TopicsRow