import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { withStyles } from '@material-ui/core/styles'
import Dashboard from '@material-ui/icons/Dashboard'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import WidgetContainer from '../dashboard/WidgetContainer'
import { getCancelamentosPorTipoEDia } from '../../services/order'

const beaconColor = {
  ok: '#00CC66',
  attention: '#FFFF66',
  critical: '#FF6666'
}

const styles = theme => {
  console.warn(theme)
  return ({
    root: {
      '& .MuiInputBase-input': {
        textAlign: 'center',
        color: 'transparent',
        textShadow: '0px 0px 0px rgba(0, 0, 0, 0.87)'
      }
    }
  })
}

const Display = withStyles(styles)(TextField)

class Beacon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSold: 1000,
      totalCanceled: 20,
      percentage: 2,
      status: 'ok'
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      chartData: getCancelamentosPorTipoEDia()
    })
  }
  handlerOnSettingsClick = () => {
    this.setState({
      dialog: true
    })
  }
  handlerOnClose = () => {
    this.setState({
      dialog: false
    })
  }
  render() {
    let {
      totalSold,
      totalCanceled,
      percentage,
      status
    } = this.state
    return (
      <WidgetContainer
        title={<FormattedMessage defaultMessage="Status" />}
        subTitle=""
        avatarIcon={<Dashboard />}
      >
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} md={6} lg={5}>
            <Display
              id="outlined-name"
              label={<FormattedMessage defaultMessage="Sold" />}
              value={totalSold}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Display
              id="outlined-name"
              label={<FormattedMessage defaultMessage="Canceled" />}
              value={totalCanceled}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} lg={2} alignContent="center">
            <div style={{
              width: '50px',
              height: '50px',
              background: beaconColor[status],
              borderRadius: '50%',
              padding: '15px 0',
              margin: 'auto'
            }}>
              <Typography variant="button" color="inherit">{percentage}%</Typography>
            </div>
          </Grid>
        </Grid>
      </WidgetContainer>
    )
  }
}

export default Beacon
