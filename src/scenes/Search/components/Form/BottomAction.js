import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import { ActionButton } from '../../../../common'

/**
 * Component styles.
 */
const styles = ({
  bottomAction: {
    maxWidth: '400px',
    alignSelf: 'center',
  },
})

const BottomAction = ({ classes, disabled, handleClick }) => {
  return (
    <Grid
      container
      className={classes.bottomAction}
    >
      <ActionButton
        disabled={disabled}
        handleClick={handleClick}
        buttonColor='linear-gradient(to right, #00bbdc, #2595ea)'
        textColor='#ffffff'
      >
        Search
      </ActionButton>
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(BottomAction)