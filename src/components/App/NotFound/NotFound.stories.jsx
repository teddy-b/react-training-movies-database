/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import type { Renderable } from '@storybook/react'

import NotFound from './NotFound'

storiesOf('Components/NotFound', module)
  .add('default', (): Renderable => (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute'
    }}
    >
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </div>
  ))
