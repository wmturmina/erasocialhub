import React, { Component, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'
import SaveAlt from '@material-ui/icons/SaveAlt'
import WidgetContainer from '../dashboard/WidgetContainer'
import FilterDialog from './FilterDialog'


class Export extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialog: false
    }
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
      dialog
    } = this.state
    return (
      <Fragment>
        {dialog &&
          <FilterDialog
            onClose={this.handlerOnClose}
          />
        }
        <WidgetContainer
          title={<FormattedMessage defaultMessage="Export data" />}
          subTitle=""
          avatarIcon={<SaveAlt />}
          onSettingsClick={this.handlerOnSettingsClick}
        >
          <Button
            color="primary"
            href="#"
            download="file.xls"
          >
            <FormattedMessage defaultMessage="Click here to download" />
          </Button>
        </WidgetContainer>
      </Fragment>
    )
  }
}

export default Export
