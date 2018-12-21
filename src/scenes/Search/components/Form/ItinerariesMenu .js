import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { FormControl, Typography, MenuItem } from '@material-ui/core'
import { PlaceSelect, DateInput } from '../../../../common'

/**
 * Component styles.
 */
const styles = ({
  bottomAction: {
    maxWidth: '400px',
    alignSelf: 'center',
  },
})

// const MenuItems = ({ options }) => {
//   return (
      
//   )
// } 

/**
 * The component with the possibles Itineraries.
 */
const ItinerariesMenu = ({ locations, handleChange, values }) => {
  return (
    <FormControl fullWidth>
      <Typography
        variant='title'
        gutterBottom
      >
        Itinerary
      </Typography>
      <PlaceSelect
        value={values.origin}
        label='Origin'
        fieldName='origin'
        onChange={handleChange}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {locations.map((item, index) =>
          <MenuItem value={item.code} key={index}>
            {`${item.code} - ${item.city}`}
          </MenuItem>
        )}
      </PlaceSelect>
      <PlaceSelect
        value={values.destination}
        label='Destination'
        fieldName='destination'
        onChange={handleChange}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {locations.map((item, index) =>
          <MenuItem value={item.code} key={index}>
            {`${item.code} - ${item.city}`}
          </MenuItem>
        )}
      </PlaceSelect>
      <DateInput
        value={values.departure1}
        fieldName='departure1'
        label='Departure'
        onChange={handleChange}
        />
      <DateInput
        value={values.departure2}
        fieldName='departure2'
        label='Arrival'
        onChange={handleChange}
      />
    </FormControl>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(ItinerariesMenu)