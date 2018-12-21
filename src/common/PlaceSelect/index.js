import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import {
  FormControl, InputLabel, Select
} from '@material-ui/core'

const styles = ({
  bottomAction: {
    maxWidth: '400px',
    alignSelf: 'center',
  },
})

/**
 * Selects for the origin and Destination places included on the trip.
 */
const PlaceSelect = ({
  children,
  fieldName,
  label,
  value,
  onChange
}) => {
  return (
    <FormControl>
      <InputLabel shrink htmlFor={fieldName}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          name: fieldName,
          id: fieldName
        }}
      >
        {children}
      </Select>
    </FormControl>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(PlaceSelect)