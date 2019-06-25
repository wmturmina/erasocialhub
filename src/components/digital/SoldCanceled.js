import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import ShowChart from '@material-ui/icons/ShowChart'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'
import WidgetContainer from '../dashboard/WidgetContainer'
import { getVendasCancelamentosDia } from '../../services/order'
import { getMessage } from '../../functions'
import FilterDialog from './FilterDialog'

class SoldCanceled extends Component {
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
      chartData: getVendasCancelamentosDia()
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
          title={<FormattedMessage defaultMessage="Sold vs Canceled" />}
          subTitle=""
          avatarIcon={<ShowChart />}
          loading={chartData.length === 0}
          onSettingsClick={this.handlerOnSettingsClick}
        >
          <Line
            data={{
              Min: 0,
              Max: 10000,
              stepSize: 500,
              responsive: true,
              maintainAspectRatio: true,
              labels: _.map(chartData, item => item.Data),
              datasets: [
                {
                  responsive: true,
                  maintainAspectRatio: true,
                  label: getMessage(messages, <FormattedMessage defaultMessage="Sold" />),
                  data: _.map(chartData, item => item.TotalVendas),
                  fill: false,
                  backgroundColor: '#00CC66',
                  borderColor: '#00CC66',
                  borderWidth: 1
                },
                {
                  responsive: true,
                  maintainAspectRatio: true,
                  label: getMessage(messages, <FormattedMessage defaultMessage="Canceled" />),
                  data: _.map(chartData, item => item.TotalCancelamentos),
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

SoldCanceled.propTypes = {
  messages: PropTypes.object
}

function mapStateToProps(state) {
  return {
    messages: state.locale.messages || {}
  }
}

export default connect(mapStateToProps, null)(SoldCanceled)
