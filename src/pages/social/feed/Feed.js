import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import '../../../../style/style.css'

class Feed extends Component {
  render() {
    console.warn(this)
    return (
      <Container maxWidth="xl">
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            Conteúdo
          </Grid>
        </Grid>
      </Container>
    )
  }
}


export default Feed
