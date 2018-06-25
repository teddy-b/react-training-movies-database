/* @flow */

import * as React from 'react'

import { storiesOf } from '@storybook/react'

import type { Renderable } from '@storybook/react'

import NotFound from './NotFound'

storiesOf('Components/NotFound', module)
  .add('default', (): Renderable => (
    <NotFound />
  ))
