/* @flow */

import * as React from 'react'

import { StyledSortInfo, StyledButton } from './StyledSortInfo'
import { SORT_BY } from '../../../../../constants/global'

type Props = {
  count: number,
  onSortMoviesByRating: () => void,
  onSortMoviesByRelaseDate: () => void,
  sortBy: string
}

const SortInfo = ({
  count,
  onSortMoviesByRelaseDate,
  onSortMoviesByRating,
  sortBy
}: Props): React.Node => (
  <StyledSortInfo>
    {count > 0 && <div>{count} movies found</div>}
    {count > 0 &&
      <div>
        <span>Sort by </span>
        <StyledButton
          selected={sortBy === SORT_BY.releaseDate}
          onClick={(): void => onSortMoviesByRelaseDate()}
        >
          Release date
        </StyledButton>
        <StyledButton
          selected={sortBy === SORT_BY.rating}
          onClick={(): void => onSortMoviesByRating()}
        >
          Rating
        </StyledButton>
      </div>}
  </StyledSortInfo>
)

export default SortInfo
