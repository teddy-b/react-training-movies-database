import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Header from './Header'
import { SEARCH_BY, SORT_BY } from '../../../../constants/global'

const props = {
  count: 24,
  onSearch: action('clicked'),
  onSearchMoviesByGenre: action('clicked'),
  onSearchMoviesByTitle: action('clicked'),
  onSortMoviesByRating: action('clicked'),
  onSortMoviesByRelaseDate: action('clicked'),
  searchBy: SEARCH_BY.title,
  sortBy: SORT_BY.releaseDate
}

storiesOf('Components/Header', module)
  .add('default', () => (
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
  ))
