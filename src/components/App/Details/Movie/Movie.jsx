/* @flow */

import * as React from 'react'

import {
  StyledMovieSection,
  StyledMovie,
  StyledMoviePoster,
  StyledMovieDetails,
  StyledDetailsHeader,
  StyledHeading,
  StyledVoteAverage,
  StyledYear
} from './StyledMovie'
import Logo from '../../../shared/Logo'
import StyledImg from '../../../shared/styled/StyledImg'
import StyledLink from '../../../shared/styled/StyledLink'

type Props = {
  overview: string,
  poster_path: ?string,
  release_date: string,
  runtime: ?number,
  tagline: string,
  title: string,
  vote_average: number
}

const Movie = (props: Props): React.Node => {
  const {
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
    runtime,
    tagline,
    title,
    vote_average: voteAverage
  } = props
  const year = new Date(releaseDate).getFullYear() || ''
  return (
    <StyledMovieSection>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <StyledMovie>
        {posterPath &&
          <StyledMoviePoster>
            <StyledImg src={posterPath} alt={title} />
          </StyledMoviePoster>
        }
        <StyledMovieDetails>
          <StyledDetailsHeader>
            <StyledHeading>{title}</StyledHeading>
            <StyledVoteAverage>{voteAverage}</StyledVoteAverage>
          </StyledDetailsHeader>
          <h4>{tagline}</h4>
          <StyledYear>{year}</StyledYear>
          {runtime && <span>{runtime} min</span>}
          <p>{overview}</p>
        </StyledMovieDetails>
      </StyledMovie>
    </StyledMovieSection>
  )
}

export default Movie
