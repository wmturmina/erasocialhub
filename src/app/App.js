import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import _ from 'lodash'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopBar from './navigation/TopBar'
import { injectComponent } from '../functions'
import {
  Feed,
  Login,
  ForgotPassword as ForgotPasswordDialog
} from '../pages'

import './../../style/style.css'

const ForgotPassword = injectComponent(Login, ForgotPasswordDialog)


const styles = theme => ({
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  container: {
    width: '100%'
  }
})
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    const {
      classes,
      auth
    } = this.props
    const loggedIn = Boolean(_.get(auth, 'accessToken'))
    console.warn('auth', auth)
    if (loggedIn) {
      return (

        <BrowserRouter basename="/">
          <CssBaseline />
          <TopBar />
          <div className={classes.container}>
            <div className={classes.topBar} />
            <br />
            <Switch>
              <Route path="/" component={Feed} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default withStyles(styles, { name: 'App' })(connect(mapStateToProps)(App))
