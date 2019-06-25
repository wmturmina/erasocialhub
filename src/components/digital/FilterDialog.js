import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { DateTimePicker } from '@material-ui/pickers'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

class FilterDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null
    }
  }
  handleChangeStartDate = (date) => {
    this.setState({ startDate: date })
  }
  handleChangeEndDate = (date) => {
    this.setState({ endDate: date })
  }
  render() {
    const {
      onClose
    } = this.props
    const {
      startDate,
      endDate
    } = this.state
    return (
      <Dialog open={true} onClose={onClose}>
        <DialogTitle><FormattedMessage defaultMessage="Filter" /></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage defaultMessage="Select the Start date and End date to filter data" />
          </DialogContentText>
          <DateTimePicker
            variant="inline"
            autoOk
            ampm={false}
            format="Pp"
            fullWidth
            label={<FormattedMessage defaultMessage="Start Date" />}
            value={startDate}
            onChange={this.handleChangeStartDate}
            disableFuture
            rightArrowIcon={<KeyboardArrowRight />}
            leftArrowIcon={<KeyboardArrowLeft />}
          />
          <DateTimePicker
            variant="inline"
            autoOk
            ampm={false}
            format="Pp"
            fullWidth
            label={<FormattedMessage defaultMessage="End Date" />}
            value={endDate}
            onChange={this.handleChangeEndDate}
            disableFuture
            rightArrowIcon={<KeyboardArrowRight />}
            leftArrowIcon={<KeyboardArrowLeft />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            <FormattedMessage defaultMessage="Cancel" />
          </Button>
          <Button onClick={onClose} color="primary" disabled={!startDate || !endDate}>
            <FormattedMessage defaultMessage="Save" />
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

FilterDialog.propTypes = {
  onClose: PropTypes.func
}

export default FilterDialog
