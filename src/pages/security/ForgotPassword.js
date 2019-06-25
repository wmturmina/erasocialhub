import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      disabled: true,
      user: '',
      open: true,
      statusOk: false
    }
  }

  handleInputChange = (event) => {
    this.setState({
      user: event.target.value,
      message: null,
      disabled: false
    })
  }

  handleSendEmail = () => {
    this.setState({
      message: 'E-mail enviado',
      disabled: true,
      statusOk: true
    })
  }

  handlerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {
      disabled,
      message,
      user,
      open,
      statusOk
    } = this.state

    return (
      <Dialog
        open={open}
        maxWidth="md"
      >
        <DialogTitle>
          Esqueci minha senha
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor informe o usuário para receber um link para reiniciar a senha em seu e-mail.
          </DialogContentText>
          <TextField
            fullWidth={true}
            onChange= {this.handleInputChange}
            label="Usuário"
            required={true}
            value={user}
          />
        </DialogContent>
        <DialogActions>
          <Typography variant="button" color={statusOk ? 'primary' : 'error'}>{ message }</Typography>
          <Button key="save" disabled={disabled} onClick={this.handleSendEmail} color="primary">Enviar</Button>
          <Button key="cancel" onClick={this.handlerClose} color="default">Fechar</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ForgotPassword
