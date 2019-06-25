import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import LoginForm from './LoginForm'

const styles = theme => ({
  gridBackground: {
    backgroundColor: theme.palette.primary.main
  }
})

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      classes
    } = this.props
    return (
      <Grid className={classes.gridBackground} container spacing={0} justify="center" alignItems="center">
        <Grid item xs={10}>
          <LoginForm />
        </Grid>
      </Grid>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { name: 'Login' })(Login)
