import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link as LinkAction } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import Link from '@material-ui/core/Link'
import indigo from '@material-ui/core/colors/indigo'
import Typography from '@material-ui/core/Typography'
import FacebookLogin from 'react-facebook-login'
import { loginSuccededAction, loginFailedAction } from '../../../actions'

const styles = theme => {
  return ({
    link: {
      fontFamily: theme.typography.fontFamily,
      color: indigo.A200,
      marginRight: '10px',
      textAlign: 'right',
      width: '100%'
    },
    container: {
      maxWidth: '446px',
      margin: '0 auto',
      [theme.breakpoints.up('sm')]: {
        padding: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        padding: '40px'
      }
    },
    logoContainer: {
      paddingBottom: '15px',
      textAlign: 'center'
    },
    facebook: {
      paddingTop: '30px',
      textAlign: 'center'
    },
    spacer: {
      marginTop: '15px',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right'
      }
    },
    sendButton: {
      width: '100%',
      marginTop: '15px'
    }
  })
}

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.enterKeyCode = 13
    this.state = {
      user: '',
      password: '',
      redirectTo: null,
      errorMessage: null,
      loggingIn: false
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState({ user: event.target.value, errorMessage: null })
  }

  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value, errorMessage: null })
  }

  handlerKeyDown = (event) => {
    if (event.keyCode === this.enterKeyCode) {
      this.handleLogin()
    }
  }

  handleLogin = () => {
    console.warn('Login')
  }

  responseFacebook = (response) => {
    this.props.loginSuccededAction(response)
  }

  componentClicked =() => {
    console.warn('clicou')
  }

  render() {
    const { errorMessage, loggingIn } = this.state
    const { classes } = this.props
    let errorMsg = null
    switch (errorMessage) {
    case 'invalid_pass':
      errorMsg = 'Usuário ou senha inválidos'
      break
    case 'error_login_input':
      errorMsg = 'Erro ao tentar entrar, por favor verifique os campos e tente novamente'
      break
    case 'error_login':
      errorMsg = 'Erro ao tentar entrar, por favor tente novamente'
      break
    default:
    }
    return (
      <Paper className={classes.container}>
        <Grid container>
          <Grid item xs={12} className={classes.logoContainer}>
            <img src="logo.gif" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              value={this.state.user}
              onChange={this.handleOnChangeUsername}
              label="Usuário"
              fullWidth
              onKeyDown={this.handlerKeyDown}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={this.state.password}
              onChange={this.handleOnChangePassword}
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              onKeyDown={this.handlerKeyDown}
            />
          </Grid>
          {errorMsg &&
            <Grid item xs={12} className={classes.spacer}>
              <FormHelperText error={true}>
                {errorMsg}
              </FormHelperText>
            </Grid>
          }
          <Grid item xs={12} md={8} className={classes.spacer}>
            <Link component={LinkAction} to="/forgot-password" variant="caption">
              Esqueci minha senha
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              onClick={this.handleLogin}
              disabled={loggingIn}
              className={classes.sendButton}
              color="primary"
              size="large"
              onKeyDown={this.handlerKeyDown}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.facebook}>
            <Typography variant="button" color="primary">ou</Typography>
          </Grid>
          <Grid item xs={12} className={classes.facebook}>
            <FacebookLogin
              appId="437523570132052"
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
              textButton="Login com o Facebook"
              language="pt_BR"
              scope="public_profile,pages_show_list,manage_pages"
            />
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

LoginForm.propTypes = {
  loginSuccededAction: PropTypes.func,
  loginFailedAction: PropTypes.func,
  classes: PropTypes.object.isRequired
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginSuccededAction,
    loginFailedAction
  }, dispatch)
}

export default withStyles(styles, { name: 'LoginForm' })(connect(null, mapDispatchToProps)(LoginForm))
