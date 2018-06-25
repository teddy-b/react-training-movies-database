/* @flow */

import * as React from 'react'

import {
  StyledMovieItem,
  StyledMovieYear,
  StyledMovieTitle,
  StyledMovieGenre
} from './StyledMovieItem'
import StyledImg from '../../styled/StyledImg'
import StyledLink from '../../styled/StyledLink'

type Props = {
  genres: Array<string>,
  id: number,
  onSelectMovie: (id: number) => void,
  poster_path: ?string,
  release_date: string,
  title: string
}

const MovieItem = ({
  genres,
  id,
  onSelectMovie,
  poster_path: posterPath,
  release_date: releaseDate,
  title
}: Props): React.Node => (
  <StyledLink to={`/film/${id}`} onClick={(): void => onSelectMovie(id)}>
    <StyledMovieItem>
      {posterPath && <StyledImg src={posterPath} alt={title} />}
      <figcaption>
        <StyledMovieYear>{new Date(releaseDate).getFullYear()}</StyledMovieYear>
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <StyledMovieGenre>{genres.join(', ')}</StyledMovieGenre>
      </figcaption>
    </StyledMovieItem>
  </StyledLink>
)

export default MovieItem
