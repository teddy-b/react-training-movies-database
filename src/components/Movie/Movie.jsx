import React from 'react'

import Logo from '../Logo'
import './Movie.scss'

const Movie = ({ genres, overview, poster_path, release_date, runtime, tagline, title, vote_average }) => (
  <div>
    <div className="movieSection">
      <Logo />
      <figure className="movie">
        <div className="moviePoster">
          <img src={poster_path} alt={title} />
        </div>
        <figcaption className="movieDetails">
          <h2>{title}</h2>
          <h4>{tagline}</h4>
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{runtime} min</span>
          <p>{overview}</p>
        </figcaption>
      </figure>
    </div>
    <div className="filmsBy">Films by {genres[0]} genre</div>
  </div>
  
)

export default Movie
