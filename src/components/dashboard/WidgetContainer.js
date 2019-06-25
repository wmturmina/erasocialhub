import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = {
  center: {
    textAlign: 'center'
  }
}

class WidgetContainer extends Component {
  render() {
    const {
      classes,
      children,
      title,
      subTitle,
      avatarIcon,
      loading,
      onSettingsClick
    } = this.props
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label={title}>
              {avatarIcon}
            </Avatar>
          }
          title={title}
          subheader={subTitle}
          action={
            <IconButton onClick={onSettingsClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.center}>
          {loading && <CircularProgress />}
          {!loading && children}
        </CardContent>
      </Card>
    )
  }
}

WidgetContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  subTitle: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  avatarIcon: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  onSettingsClick: PropTypes.func
}

WidgetContainer.defaultProps = {
  loading: false,
  onSettingsClick: () => null
}

export default withStyles(styles, { name: 'WidgetContainer' })(WidgetContainer)
