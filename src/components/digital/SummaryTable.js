import React, { Component, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ViewColumn from '@material-ui/icons/ViewColumn'
import _ from 'lodash'
import { parse } from 'date-fns'
import { getVendas } from '../../services/order'
import FilterDialog from './FilterDialog'

const ExportIcon = function (props) {
  return (
    <SaveAlt color="primary" {...props} />
  )
}

ExportIcon.displayName = 'ExportIcon'

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: ExportIcon,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn
}

class SummaryTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: [],
      dialog: false
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      tableData: getVendas()
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
      tableData,
      dialog
    } = this.state
    tableData = _.sortBy(tableData.vendas, 'data', 'desc')
    tableData = _.map(tableData, row => {
      return {
        ...row,
        data: parse(row.data, 'dd/MM/yyyy HH:mm', new Date())
      }
    })
    return (
      <Fragment>
        {dialog &&
          <FilterDialog
            onClose={this.handlerOnClose}
          />
        }
        <MaterialTable
          icons={tableIcons}
          title={<FormattedMessage defaultMessage="Summary table" />}
          columns={[
            { title: <FormattedMessage defaultMessage="Code" />, field: 'codigo' },
            { title: <FormattedMessage defaultMessage="Restaurant" />, field: 'restaurante' },
            { title: <FormattedMessage defaultMessage="Partner" />, field: 'parceiro' },
            { title: <FormattedMessage defaultMessage="Date" />, field: 'data', type: 'datetime' },
            { title: <FormattedMessage defaultMessage="Customer's name" />, field: 'nomeCliente' },
            { title: <FormattedMessage defaultMessage="Status" />, field: 'status' },
            { title: <FormattedMessage defaultMessage="Message" />, field: 'mensagem' },
            { title: <FormattedMessage defaultMessage="Made" />, field: 'produzido' },
            { title: <FormattedMessage defaultMessage="# of trys" />, field: 'numTentativas', type: 'numeric' }
          ]}
          data={tableData}
          options={{
            search: false,
            filtering: true,
            pageSize: 10,
            pageSizeOptions: [10, 25, 50]
          }}
          actions={[
            {
              icon: MoreVertIcon,
              isFreeAction: true,
              onClick: this.handlerOnSettingsClick,
              iconProps: {
                color: 'primary'
              }
            }
          ]}
        />
      </Fragment>
    )
  }
}

export default SummaryTable
