import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import { Main, Header } from '../../common'
import LoginForm from './components/LoginForm'

/**
 * Component styles.
 */
const styles = ({
  background: {
    background: 'linear-gradient(to right, #00bbdc, #1c87d8)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class Login extends Component {
  /**
   * Binding here for code cleaness.
   */
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Redirect to search page.
   */
  handleSubmit = () => {
    console.log('submit')
  }

  render () {
    const { classes } = this.props

    return (
      <Main>
        <Header />
        <Grid 
          container 
          alignItems='flex-end'
          className={classes.background}
        >
          <LoginForm 
            onSubmit={this.handleSubmit}
          />
        </Grid>
      </Main>
    )
  }
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Login)
