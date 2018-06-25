/* @flow */

import * as React from 'react'

type Props = {
  children: ?React.Node,
}

type State = {
  error: boolean,
  errorInfo: {
    componentStack: string
  }
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      error: false,
      errorInfo: {
        componentStack: ''
      }
    }
  }

  componentDidCatch(error: boolean, errorInfo: { componentStack: string }) {
    this.setState({
      error,
      errorInfo
    })
  }

  render(): React.Node {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{
            whiteSpace: 'pre-wrap'
          }}
          >
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
