/* @flow */

import * as React from 'react'

import { storiesOf } from '@storybook/react'

import type { Renderable } from '@storybook/react'

import Loading from './Loading'

storiesOf('Components/Loading', module)
  .add('default', (): Renderable => (
    <Loading />
  ))
