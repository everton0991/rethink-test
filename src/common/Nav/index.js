import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

/**
 * Component styles.
 */
const styles = ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navItem: {
    textDecoration: 'none',
    marginLeft: 15
  },
  navText: {
    color: '#ffffff'
  }
})

const Nav = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid className={classes.nav}>
      <Link 
        className={classes.navItem} 
        to='/search'
      >
        <Typography
          className={classes.navText}
          variant='button'
        >
          Search
        </Typography>
      </Link>
      <Link 
        className={classes.navItem} 
        to='/login'
      >
        <Typography
          className={classes.navText}
          variant='button'
        >
          Login
        </Typography>
      </Link>
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Nav)