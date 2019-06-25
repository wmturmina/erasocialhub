import React, { Component, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import ShowChart from '@material-ui/icons/ShowChart'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'
import WidgetContainer from '../dashboard/WidgetContainer'
import { getCancelamentosPorTipoEDia } from '../../services/order'
import FilterDialog from './FilterDialog'

const chartColors = [
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#EF5350',
  '#F44336',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C'
]

class CancelationsByType extends Component {
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
      chartData,
      dialog
    } = this.state
    chartData = _.sortBy(chartData, 'Tipo')
    return (
      <Fragment>
        {dialog &&
          <FilterDialog
            onClose={this.handlerOnClose}
          />
        }
        <WidgetContainer
          title={<FormattedMessage defaultMessage="Cancelation by type" />}
          subTitle=""
          avatarIcon={<ShowChart />}
          loading={chartData.length === 0}
          onSettingsClick={this.handlerOnSettingsClick}
        >
          <Line
            data={{
              Min: 0,
              Max: 250,
              stepSize: 25,
              labels: _.map(_.get(chartData[0], 'Cancelamentos', undefined), item => item.Data),
              datasets: _.map(chartData, (type, index) => {
                const dataSorted = _.sortBy(type.Cancelamentos, 'Data')
                return {
                  label: type.Tipo,
                  responsive: true,
                  maintainAspectRatio: true,
                  lineTension: 0.1,
                  data: _.map(dataSorted, item => item.Total),
                  fill: false,
                  backgroundColor: chartColors[index],
                  borderWidth: 1
                }
              })
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

export default CancelationsByType
