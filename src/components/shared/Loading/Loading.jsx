import React from 'react'
import ReactLoading from 'react-loading'

import StyledLoading from './StyledLoading'

const Loading = () => (
  <StyledLoading>
    <ReactLoading type="spinningBubbles" color="deepSkyBlue" />
  </StyledLoading>
)

export default Loading
