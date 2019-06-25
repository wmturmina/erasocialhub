import React, { Component, Fragment } from 'react'

function injectComponent(WrappedComponent, InjectedComponent) {
  class ReturnComponent extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <Fragment>
          <InjectedComponent {...this.props} />
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
  return ReturnComponent
}

export default injectComponent
