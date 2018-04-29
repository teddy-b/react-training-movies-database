import React from 'react'

import { SORT_BY } from '../../../../../constants'
import './SortInfo.scss'

const SortInfo = ({ count, onSort }) => (
  <div className="sortInfo">
    {count > 0 && <div>{count} movies found</div>}
    {count > 0 && <div>
      <span>Sort by </span>
      <a onClick={() => onSort(SORT_BY.releaseDate)}>Release date</a> 
      <a onClick={() => onSort(SORT_BY.rating)}>Rating</a>
    </div>}
  </div>
)

export default SortInfo
