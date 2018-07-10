import styled from 'styled-components'

import { blue, purple, red } from '../../../constants/styles'

export const StyledNotFound = styled.div`
  background-color: ${purple}; 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledTitle = styled.div`
  font-size: 6em;
  font-weight: 700;
  color: ${red};
`

export const StyledSubtitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${blue};
`

export const StyledButtons = styled.div`
  margin: 30px;
`

export const StyledButton = styled.span`
  font-weight: 700;
  border: 2px solid ${red};
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: ${red};
  border-radius: 26px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${red};
    color: white;
    transition: all 0.2s ease-in-out;
  }
`
