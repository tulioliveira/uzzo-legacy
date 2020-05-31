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
        lineHeight: '2.5rem'
      },
      h1: {
        fontSize: 6,
        fontWeight: 'bold',
        lineHeight: '5rem'
      },
      h2: {
        fontSize: 5,
        fontWeight: 'bold',
        lineHeight: '3.5rem'
      },
      h3: {
        fontSize: 4,
        fontWeight: 'normal',
        lineHeight: '2.75rem'
      },
      h4: {
        fontSize: 3,
        fontWeight: 'normal',
        lineHeight: '2.75rem'
      },
      caption: {
        fontSize: 1,
        fontWeight: 'normal',
        lineHeight: '2rem'
      },
      small: {
        fontSize: 0,
        fontWeight: 'normal',
        lineHeight: '1.75rem'
      }
    }
  })}
`

Text.defaultProps = {
  fontFamily: 'CircularStd',
  type: 'default'
}

export default Text