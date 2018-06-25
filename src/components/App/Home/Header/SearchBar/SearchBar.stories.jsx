/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { Renderable } from '@storybook/react'

import SearchBar from './SearchBar'
import { SEARCH_BY } from '../../../../../constants/global'

const props = {
  onSearch: action('clicked'),
  onSearchMoviesByGenre: action('clicked'),
  onSearchMoviesByTitle: action('clicked'),
  searchBy: SEARCH_BY.title
}

storiesOf('Components/SearchBar', module)
  .add('search by title', (): Renderable => (
    <MemoryRouter>
      <SearchBar
        {...props}
        searchBy={SEARCH_BY.title}
      />
    </MemoryRouter>
  ))
  .add('search by genre', (): Renderable => (
    <MemoryRouter>
      <SearchBar
        {...props}
        searchBy={SEARCH_BY.genre}
      />
    </MemoryRouter>
  ))
