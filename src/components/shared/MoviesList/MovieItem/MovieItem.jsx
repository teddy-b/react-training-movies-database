import React from 'react'

import './MovieItem.scss'

const MovieItem = ({ genres, id, onSelectMovie, poster_path, release_date, title }) => (
  <figure className="movieItem" onClick={() => onSelectMovie(id)}>
    <img className="poster" src={poster_path} alt={title} />
    <figcaption className="movieInfo">
      <div className="movieYear">{new Date(release_date).getFullYear()}</div>
      <div className="movieTitle">{title}</div>
      <div className="movieGenre">{genres.join(', ')}</div>
    </figcaption>
  </figure>
)

export default MovieItem
