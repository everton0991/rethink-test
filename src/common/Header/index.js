import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import Nav from '../Nav'

/**
 * Component styles.
 */
const styles = ({
  header: {
    background:  'linear-gradient(to right, #00bbdc, #1c87d8)',
    color: '#ffffff',
    padding: '20px 25px',
  },
  headline: {
    color: '#ffffff'
  }
})

const Header = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid 
      container
      direction='row'
      alignItems='center'
      className={classes.header}
    >
      <Grid style={{ flex: '5' }}>
        <Typography
          className={classes.headline}
          variant='display1'
        >
          Webstack Flights
        </Typography>
      </Grid>
      <Nav />
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Header)