import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid, FormControl, TextField } from '@material-ui/core'
import { ActionButton } from '../../../common'

/**
 * Component styles.
 */
const styles = ({
  wrapper: {
    maxWidth: 400,
    padding: '15px 25px 0 25px',
    color: '#ffffff',
  },
  font: {
    color: '#ffffff'
  },
  textField: {
    color: '#ffffff !important'
  },
})

const LoginForm = ({ classes, onSubmit  }) => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.wrapper}
    >
      <FormControl fullWidth>
        <TextField
          id='username'
          label='Username'
          placeholder='Your Username..'
          classes={{
            root: classes.textField
          }}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id='password'
          label='Password' 
          type='password'
          placeholder='Your secret password..'
          className={classes.textField}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <ActionButton
        handleClick={onSubmit}
      >
        Login
      </ActionButton>
  </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(LoginForm)