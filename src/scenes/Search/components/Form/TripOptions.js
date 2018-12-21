import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { 
  FormControl, 
  FormControlLabel, 
  Typography, 
  Radio, 
  RadioGroup, 
  TextField 
} from '@material-ui/core'

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
 * The component with the Trip Options.
 */
const TripOptions = ({ label, values, handleChange }) => {
  return (
    <FormControl fullWidth>
      <Typography
        variant='title'
        gutterBottom
      >
        Options
      </Typography>
      <RadioGroup
        aria-label={label}
        name='type'
        value={values.type}
        onChange={handleChange}
      >
        <FormControlLabel
          value='roundtrip'
          control={<Radio />}
          label='Round Trip'
        />
        <FormControlLabel
          value='oneway'
          control={<Radio />}
          label='One Way'
        />
      </RadioGroup>
      <TextField
        type='number'
        id='passengers'
        label='Passengers'
        name='passengers'
        value={values.passengers}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
    </FormControl>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(TripOptions)