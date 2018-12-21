import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { TextField } from '@material-ui/core'

/**
 * Component styles.
 */
const styles = ({
  bottomAction: {
    maxWidth: '400px',
    alignSelf: 'center',
  },
})

/**
 * Inputs to selection of the trip dates.
 */
const DateInput = ({ fieldName, label, value, onChange }) => {
  return (
    <TextField
      type="date"
      id={fieldName}
      name={fieldName}
      label={label}
      defaultValue={value}
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
    />
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(DateInput)