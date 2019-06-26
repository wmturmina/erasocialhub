import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import PulicIcon from '@material-ui/icons/Public'
import CircularProgress from '@material-ui/core/CircularProgress'
import _ from 'lodash'
import '../../../../style/style.css'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paginas: [],
      pagina: null,
      posts: [],
      loading: false
    }
  }
  componentDidMount() {
    FB.api(
      '/me/accounts',
      'GET',
      {},
      this.loadPaginas
    )
  }
  loadPaginas = (response) => {
    this.setState({
      paginas: _.map(response.data, (item) => {
        return ({
          id: item.id,
          name: item.name
        })
      })
    })
  }

  loadFeed = (response) => {
    this.setState({
      posts: response.data,
      loading: false
    })
  }
  handleChange = (event, value) => {
    const url = `/${value}/posts?fields=id,message,permalink_url,attachments`
    FB.api(
      url,
      'GET',
      {},
      this.loadFeed
    )
    this.setState({
      pagina: value,
      loading: true
    })
  }
  render() {
    const {
      paginas,
      pagina,
      posts,
      loading
    } = this.state
    return (
      <Container maxWidth="xl">
        {paginas.length > 0 &&
          <AppBar position="static">
            <Tabs value={pagina} onChange={this.handleChange}>
              {_.map(paginas, (item, key) => {
                return (
                  <Tab key={key} value={item.id} label={item.name} />
                )
              })}
            </Tabs>
          </AppBar>
        }
        <Paper style={{ textAlign: 'center' }}>
          {posts.length > 0 && !loading &&
            <GridList spacing={1}>
              {_.map(posts, (post, key) => {
                let imgSrc = null
                if (post.attachments) {
                  imgSrc = post.attachments.data[0].media.image.src
                  console.warn('img', imgSrc)
                }
                return (
                  <GridListTile key={key} cols={1}>
                    {imgSrc &&
                      <img src={imgSrc} />
                    }
                    <GridListTileBar
                      title={post.message || 'Sem mensagem'}
                      titlePosition="top"
                      actionIcon={
                        <IconButton component="a" href={post.permalink_url} target="_blank">
                          <PulicIcon />
                        </IconButton>
                      }
                      actionPosition="right"
                    />
                  </GridListTile>
                )
              })
              }
            </GridList>
          }
          {posts.length === 0 && !loading &&
            <Typography variant="subtitle1" color="primary">Selecione uma página</Typography>
          }
          {loading &&
            <CircularProgress style={{ margin: 30 }} />
          }
        </Paper>
      </Container>
    )
  }
}


export default Feed
