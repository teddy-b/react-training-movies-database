/* @flow */

import React from 'react'

import { SORT_BY } from '../../../../../constants/global'

import './SortInfo.scss'

type Props = {
  count: number,
  onSortMoviesByRating: () => void,
  onSortMoviesByRelaseDate: () => void,
  sortBy: string
}

const SortInfo = (props: Props) => {
  const { count, onSortMoviesByRelaseDate, onSortMoviesByRating, sortBy } = props
  return (
    <div className="sortInfo">
      {count > 0 && <div>{count} movies found</div>}
      {count > 0 &&
        <div>
          <span>Sort by </span>
          <button
            className={`${sortBy === SORT_BY.releaseDate ? 'selected' : ''}`}
            onClick={() => onSortMoviesByRelaseDate()}
          >
            Release date
          </button>
          <button
            className={`${sortBy === SORT_BY.rating ? 'selected' : ''}`}
            onClick={() => onSortMoviesByRating()}
          >
            Rating
          </button>
        </div>}
    </div>
  )
}

export default SortInfo
