/* @flow */

import * as React from 'react'
import ReactLoading from 'react-loading'

import StyledLoading from './StyledLoading'

const Loading = (): React.Node => (
  <StyledLoading>
    <ReactLoading type="spinningBubbles" color="deepSkyBlue" />
  </StyledLoading>
)

export default Loading
