import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import ShowChart from '@material-ui/icons/ShowChart'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'
import WidgetContainer from '../dashboard/WidgetContainer'
import { getTaxaDeCancelamentoPorDia } from '../../services/order'
import { getMessage } from '../../functions'
import FilterDialog from './FilterDialog'


class CancelationsRate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: [],
      dialog: false
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      chartData: getTaxaDeCancelamentoPorDia()
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
    const {
      messages
    } = this.props
    let {
      chartData,
      dialog
    } = this.state
    chartData = _.sortBy(chartData, 'Data')
    return (
      <Fragment>
        {dialog &&
          <FilterDialog
            onClose={this.handlerOnClose}
          />
        }
        <WidgetContainer
          title={<FormattedMessage defaultMessage="Cancelation rate" />}
          subTitle=""
          avatarIcon={<ShowChart />}
          loading={chartData.length === 0}
          onSettingsClick={this.handlerOpenDialog}
        >
          <Line
            data={{
              Min: 0,
              Max: 1000,
              stepSize: 10,
              responsive: true,
              maintainAspectRatio: true,
              labels: _.map(chartData, item => item.Data),
              datasets: [
                {
                  responsive: true,
                  maintainAspectRatio: true,
                  label: getMessage(messages, <FormattedMessage defaultMessage="Cancelation rate" />),
                  data: _.map(chartData, item => item.TaxaCancelamento),
                  fill: false,
                  backgroundColor: '#FF6666',
                  borderColor: '#FF6666',
                  borderWidth: 1
                }
              ]
            }}
            options={{
              title: {
                display: false
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
        </WidgetContainer>
      </Fragment>
    )
  }
}

CancelationsRate.propTypes = {
  messages: PropTypes.object
}

function mapStateToProps(state) {
  return {
    messages: state.locale.messages || {}
  }
}

export default connect(mapStateToProps, null)(CancelationsRate)

