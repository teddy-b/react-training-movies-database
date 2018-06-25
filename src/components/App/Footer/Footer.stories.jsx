/* @flow */

import * as React from 'react'

import { storiesOf } from '@storybook/react'

import type { Renderable } from '@storybook/react'

import Footer from './Footer'

storiesOf('Components/Footer', module)
  .add('default', (): Renderable => (
    <Footer />
  ))
