import styled from 'styled-components'

import { grey4, green, landscapePhoneMinWidth, red, white } from '../../../../constants/styles'

export const StyledMovieSection = styled.div`
  background-color: ${grey4};
  color: ${white};
  padding: .5em;
`

export const StyledMovie = styled.figure`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;

  @media screen and (min-width: ${landscapePhoneMinWidth}) {
    flex-wrap: nowrap;
  }
`

export const StyledMoviePoster = styled.div`
  margin: 2%;
  width: 98%;

  @media screen and (min-width: ${landscapePhoneMinWidth}) {
    width: 26%;
  }
`

export const StyledImg = styled.img`
  width: 100%;
`

export const StyledMovieDetails = styled.figcaption`
  margin: 2%;
  width: 98%;

  @media screen and (min-width: ${landscapePhoneMinWidth}) {
    width: 66%;
  }
`

export const StyledDetailsHeader = styled.div`
  display: flex;
  align-items: center;
`

export const StyledHeading = styled.h2`
  color: ${red};
`

export const StyledVoteAverage = styled.span`
  margin: 1em;
  padding: .5em;
  color: ${green};
  border: 2px solid ${green};
  border-radius: 50px;
`

export const StyledYear = styled.span`
  padding-right: 1em;
`
