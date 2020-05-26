import styled from 'styled-components'
import { space, color, typography, layout, flexbox, variant } from 'styled-system'

const Text = styled.div`
  transition: all 0.15s ease;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${variant({
    prop: 'type',
    variants: {
      default: {
        fontSize: 2,
        fontWeight: 'normal',
        lineHeight: '20rem'
      },
      h1: {
        fontSize: 6,
        fontWeight: 'bold',
        lineHeight: '41rem'
      },
      h2: {
        fontSize: 5,
        fontWeight: 'bold',
        lineHeight: '28rem'
      },
      h3: {
        fontSize: 4,
        fontWeight: 'normal',
        lineHeight: '22rem'
      },
      h4: {
        fontSize: 3,
        fontWeight: 'normal',
        lineHeight: '22rem'
      },
      caption: {
        fontSize: 1,
        fontWeight: 'normal',
        lineHeight: '16rem'
      },
      small: {
        fontSize: 0,
        fontWeight: 'normal',
        lineHeight: '13rem'
      }
    }
  })}
`

Text.defaultProps = {
  fontFamily: 'CircularStd',
  type: 'default'
}

export default Text