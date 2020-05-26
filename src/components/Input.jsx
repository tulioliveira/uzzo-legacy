import styled, { css } from 'styled-components'
import { space, color, typography, layout, flexbox, border, shadow, variant } from 'styled-system'

const Input = styled.input`
  outline: 0;
  transition: all .15s ease;
  ${({ theme: { space }}) => css`
    padding: ${space[2]}px ${space[3]}px;
    margin: ${space[2]}px ${space[0]}px;
  `}
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
  ${variant({
    prop: 'type',
    variants: {
      normal: {
        bg: 'white',
        color: 'primary',
      },
      primary: {
        bg: 'primary',
        color: 'white',
      },
      accent: {
        bg: 'accent',
        color: 'black',
      },
      success: {
        bg: 'success',
        color: 'white',
      },
      error: {
        bg: 'error',
        color: 'white',
      },
      warning: {
        bg: 'warning',
        color: 'black',
      },
      info: {
        bg: 'info',
        color: 'white',
      }
    }
  })}

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.inputHover};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey2};
  }
`

Input.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'CircularStd',
  fontSize: 2,
  border: 'input',
  borderRadius: 'input',
  type: 'normal'
}

export default Input