import React from 'react'
import ReactLoading from 'react-loading'

import './Loading.scss'

const Loading = () => (
  <div className="loading">
    <ReactLoading type="spinningBubbles" color="deepSkyBlue" />
  </div>
)

export default Loading
