import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../../shared/Logo'
import './Movie.scss'

const Movie = ({
  overview,
  poster_path: posterPath,
  release_date: releaseDate,
  runtime,
  tagline,
  title,
  vote_average: voteAverage
}) => (
  <div className="movieSection">
    <Logo />
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
        <span>{new Date(releaseDate).getFullYear()}</span>
        {runtime && <span>{runtime} min</span>}
        <p>{overview}</p>
      </figcaption>
    </figure>
  </div>
)

Movie.propTypes = {
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired
}

Movie.defaultProps = {
  poster_path: '',
  runtime: 0
}

export default Movie
