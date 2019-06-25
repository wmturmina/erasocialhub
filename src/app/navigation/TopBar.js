import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import {
  Logo
} from '../../assets'


const styles = theme => ({
  logoContainer: {
    width: 180,
    marginRight: theme.spacing(2)
  }
})
class TopBar extends Component {
  render() {
    const {
      classes
    } = this.props

    return (
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <div className={classes.logoContainer}>
            <Logo />
          </div>
          <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
            ERA Social Hub
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

TopBar.defaultProps = {
  isDeskTop: true
}

export default withStyles(styles, { name: 'TopBar' })(TopBar)
