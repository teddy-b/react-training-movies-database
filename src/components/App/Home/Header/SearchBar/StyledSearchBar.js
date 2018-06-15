import styled from 'styled-components'

import { black, grey2, grey4, red, white } from '../../../../../constants/styles'

export const StyledSearchBar = styled.div`
  background-color: ${grey4};
  color: ${white};
  padding: .5em;
`

export const StyledSearchBarTitle = styled.p`
  text-transform: uppercase;
`

export const StyledSearchInput = styled.input`
  width: 98%;
  padding: .8em;
  background-color: ${black};
  color: inherit;
  border: none;
  border-bottom: 1px solid ${red};
`

export const StyledSearchFooter = styled.div`
  padding: .5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledSearchBy = styled.div`
  text-transform: uppercase;
`

export const StyledSearchByBtns = styled.div`
  flex-grow: 2;
`

export const StyledSearchByBtn = styled.button`
  color: ${white};
  border: none;
  cursor: pointer;
  margin: .3em;
  padding: .6em;
  background-color: ${props => (props.selected ? red : grey2)};
`

export const StyledSearchBtn = styled.button`
  color: ${white};
  border: none;
  cursor: pointer;
  margin: .2em;
  padding: .8em;
  width: 15vw;
  background-color: ${red};
`
