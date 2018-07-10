/* @flow */

import * as React from 'react'

import { storiesOf } from '@storybook/react'

import type { Renderable } from '@storybook/react'

import Logo from './Logo'

storiesOf('Components/Logo', module)
  .add('default', (): Renderable => (
    <Logo />
  ))
