import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SortInfo from './SortInfo'
import { SORT_BY } from '../../../../../constants/global'

const props = {
  count: 24,
  onSortMoviesByRating: action('clicked'),
  onSortMoviesByRelaseDate: action('clicked'),
  sortBy: SORT_BY.releaseDate
}

storiesOf('Components/SortInfo', module)
  .add('sort by release date', () => (
    <SortInfo
      {...props}
      sortBy={SORT_BY.releaseDate}
    />
  ))
  .add('sort by rating', () => (
    <SortInfo
      {...props}
      sortBy={SORT_BY.rating}
    />
  ))
