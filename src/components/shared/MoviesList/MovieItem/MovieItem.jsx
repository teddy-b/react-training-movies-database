import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './MovieItem.scss'

const MovieItem = ({
  genres,
  id,
  onSelectMovie,
  poster_path: posterPath,
  release_date: releaseDate,
  title
}) => (
  <Link
    to={`/film/${id}`}
    style={{ textDecoration: 'none' }}
    onClick={() => onSelectMovie(id)}
  >
    <figure className="movieItem">
      {posterPath && <img className="poster" src={posterPath} alt={title} />}
      <figcaption className="movieInfo">
        <div className="movieYear">{new Date(releaseDate).getFullYear()}</div>
        <div className="movieTitle">{title}</div>
        <div className="movieGenre">{genres.join(', ')}</div>
      </figcaption>
    </figure>
  </Link>
)

MovieItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

MovieItem.defaultProps = { poster_path: '' }

export default MovieItem
