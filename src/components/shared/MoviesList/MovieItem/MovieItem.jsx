/* @flow */

import * as React from 'react'
import { Link } from 'react-router-dom'

import './MovieItem.scss'

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
}: Props) => (
  <Link
    to={`/film/${id}`}
    // style={{ textDecoration: 'none' }}
  >
    <figure className="movieItem" onClick={() => onSelectMovie(id)}>
      {posterPath && <img className="poster" src={posterPath} alt={title} />}
      <figcaption className="movieInfo">
        <div className="movieYear">{new Date(releaseDate).getFullYear()}</div>
        <div className="movieTitle">{title}</div>
        <div className="movieGenre">{genres.join(', ')}</div>
      </figcaption>
    </figure>
  </Link>
)

export default MovieItem
