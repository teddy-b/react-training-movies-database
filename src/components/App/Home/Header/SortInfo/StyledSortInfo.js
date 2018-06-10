import styled from 'styled-components'

import { black, lightgrey, red } from '../../../../../constants/styles'

export const StyledSortInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${lightgrey};
  padding: .5em;
`

export const StyledButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: inherit;
  cursor: pointer;
  color: ${props => (props.selected ? red : black)};
`
