/* @flow */

import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { Renderable } from '@storybook/react'

import SortInfo from './SortInfo'
import { SORT_BY } from '../../../../../constants/global'

const props = {
  count: 24,
  onSortMoviesByRating: action('clicked'),
  onSortMoviesByRelaseDate: action('clicked'),
  sortBy: SORT_BY.releaseDate
}

storiesOf('Components/SortInfo', module)
  .add('sort by release date', (): Renderable => (
    <SortInfo
      {...props}
      sortBy={SORT_BY.releaseDate}
    />
  ))
  .add('sort by rating', (): Renderable => (
    <SortInfo
      {...props}
      sortBy={SORT_BY.rating}
    />
  ))
