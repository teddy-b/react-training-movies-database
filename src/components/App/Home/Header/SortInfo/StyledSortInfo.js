/* @flow */

import styled from 'styled-components'

import { black, grey1, red } from '../../../../../constants/styles'

export const StyledSortInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${grey1};
  padding: .5em;
`

export const StyledButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: inherit;
  cursor: pointer;
  color: ${(props: { [prop: string]: string }): string => (props.selected ? red : black)};
`
