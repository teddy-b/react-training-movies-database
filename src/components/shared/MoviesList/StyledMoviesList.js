import styled from 'styled-components'

import { grey2, white } from '../../../constants/styles'

export const StyledMoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const StyledNoMovies = styled.div`
  margin: auto;
  padding-top: 30vh;
  font-size: 3em;
`

export const StyledMoreBtn = styled.button`
  margin: auto;
  margin-top: 1em;
  margin-bottom: 3em;
  padding: .6em;
  color: ${white};
  background-color: ${grey2};
  border: none;
  cursor: pointer;
`
