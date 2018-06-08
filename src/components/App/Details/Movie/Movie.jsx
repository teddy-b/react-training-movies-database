/* @flow */

import * as React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../shared/Logo'

import './Movie.scss'

type Props = {
  overview: string,
  poster_path: ?string,
  release_date: string,
  runtime: ?number,
  tagline: string,
  title: string,
  vote_average: number
}

const Movie = (props: Props) => {
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
    <div className="movieSection">
      <Link
        // style={{ textDecoration: 'none' }}
        to="/"
      >
        <Logo />
      </Link>
      <figure className="movie">
        {posterPath &&
          <div className="moviePoster">
            <img src={posterPath} alt={title} />
          </div>
        }
        <figcaption className="movieDetails">
          <div className="heading">
            <h2>{title}</h2>
            <span className="voteAverage">{voteAverage}</span>
          </div>
          <h4>{tagline}</h4>
          <span>{year}</span>
          {runtime && <span>{runtime} min</span>}
          <p>{overview}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default Movie
