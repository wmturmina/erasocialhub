import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import ShowChart from '@material-ui/icons/ShowChart'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'
import WidgetContainer from '../dashboard/WidgetContainer'
import { getVendasPorLoja } from '../../services/order'
import { getMessage } from '../../functions'
import FilterDialog from './FilterDialog'

class SoldCanceledByStore extends Component {
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
      chartData: getVendasPorLoja()
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
    chartData = _.sortBy(chartData, 'Loja')
    return (
      <Fragment>
        {dialog &&
          <FilterDialog
            onClose={this.handlerOnClose}
          />
        }
        <WidgetContainer
          title={<FormattedMessage defaultMessage="Sold vs Canceled by Store" />}
          subTitle=""
          avatarIcon={<ShowChart />}
          loading={chartData.length === 0}
          onSettingsClick={this.handlerOnSettingsClick}
        >
          <Line
            data={{
              Min: 0,
              Max: 1000,
              stepSize: 10,
              responsive: true,
              maintainAspectRatio: true,
              labels: _.map(chartData, item => item.Loja),
              datasets: [
                {
                  responsive: true,
                  maintainAspectRatio: true,
                  label: getMessage(messages, <FormattedMessage defaultMessage="Total Sold" />),
                  data: _.map(chartData, item => item.TotalVendas),
                  fill: false,
                  backgroundColor: '#00CC66',
                  borderColor: '#00CC66',
                  borderWidth: 1
                },
                {

                  responsive: true,
                  maintainAspectRatio: true,
                  label: getMessage(messages, <FormattedMessage defaultMessage="Total Canceled" />),
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

SoldCanceledByStore.propTypes = {
  messages: PropTypes.object
}

function mapStateToProps(state) {
  return {
    messages: state.locale.messages || {}
  }
}

export default connect(mapStateToProps, null)(SoldCanceledByStore)
