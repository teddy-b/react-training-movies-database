import React from 'react'

import PropTypes from 'prop-types'

import { SORT_BY } from '../../../../../constants/global'

import './SortInfo.scss'

const SortInfo = ({ count, onSortMoviesByRelaseDate, onSortMoviesByRating, sortBy }) => (
  <div className="sortInfo">
    {count > 0 && <div>{count} movies found</div>}
    {count > 0 &&
      <div>
        <span>Sort by </span>
        <button
          className={`${sortBy === SORT_BY.releaseDate && 'selected'}`}
          onClick={() => onSortMoviesByRelaseDate()}
        >
          Release date
        </button>
        <button
          className={`${sortBy === SORT_BY.rating && 'selected'}`}
          onClick={() => onSortMoviesByRating()}
        >
          Rating
        </button>
      </div>}
  </div>
)

SortInfo.propTypes = {
  count: PropTypes.number.isRequired,
  onSortMoviesByRating: PropTypes.func.isRequired,
  onSortMoviesByRelaseDate: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired
}

export default SortInfo
