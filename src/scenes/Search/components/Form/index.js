
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'

/**
 * Component styles.
 */
const styles = (theme) => ({
  whiteBlock: {
    backgroundColor: '#ffffff',
    padding: '15px 25px'
  }
})

/**
 * Form component that is exported byt default.
 */
const Form = ({ classes, children }) => {
  return (
    <Grid
      container
      direction='column'
      className={classes.whiteBlock}
    >
      <form autoComplete="off">
        {children}
      </form>
    </Grid >
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Form)