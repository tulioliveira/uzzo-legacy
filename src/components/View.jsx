import styled from 'styled-components'
import { space, color, layout, flexbox, grid, border, shadow } from 'styled-system'

/**
 * General use View component that implements the flex (or grid) layout system
 */
const View = styled.div`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${shadow}
  cursor: default;
   /* Customize website's scrollbar like Mac OS
  Not supports in Firefox and IE */

  /* total width */
  &::-webkit-scrollbar {
    background-color: #fff;
    width: 16px
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
    background-color: #fff
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {display:none}
`

View.defaultProps = {
  display: 'flex',
  flexDirection: 'column'
}

export default View