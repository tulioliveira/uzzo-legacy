import styled from 'styled-components'
import { space, color, typography, layout, flexbox, border, shadow, variant } from 'styled-system'

const Button = styled.button`
  display: flex;
  flex-direction: row;
  outline: 0;
  outline: 0;
  cursor: pointer;
  user-select: none;
  transition: all .15s ease;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
  ${variant({
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
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.buttonHover};
  }
`

Button.defaultProps = {
  fontFamily: 'CircularStd',
  fontSize: 2,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 'button',
  boxShadow: 'button',
  variant: 'normal',
  py: 1,
  px: 3,
  my: 2,
  mx: 0,
}

export default Button