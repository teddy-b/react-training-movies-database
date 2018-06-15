import styled from 'styled-components'

import {
  grey3,
  landscapePhoneMinWidth,
  smallDesktopMinWidth,
  largeDesktopMinWidth
} from '../../../../constants/styles'

export const StyledMovieItem = styled.figure`
  width: 100vw;
  margin: 0;

  @media screen and (min-width: ${landscapePhoneMinWidth}) {
    width: 44vw;
    margin: 2vw;
  }

  @media screen and (min-width: ${smallDesktopMinWidth}) {
    width: 28vw;
  }

  @media screen and (min-width: ${largeDesktopMinWidth}) {
    width: 20vw;
  }
`

export const StyledImg = styled.img`
  width: 100%;
`

export const StyledMovieYear = styled.div`
  padding: 2px;
  float: right;
  border: 1px solid ${grey3};
`

export const StyledMovieTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`

export const StyledMovieGenre = styled.div`
  color: ${grey3};
  flex-grow: 2;
`
