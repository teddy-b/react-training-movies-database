import styled from 'styled-components'

import { grey4, footerHeight, white } from '../../../constants/styles'

const StyledFooter = styled.footer`
  background-color: ${grey4};
  color: ${white};
  padding: .5em;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${footerHeight};
`

export default StyledFooter
