
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { 
  Grid, List, ListItem, ListItemText, Typography 
} from '@material-ui/core'

/**
 * Component styles.
 */
const styles = (theme) => ({
  grayBlock: {
    backgroundColor: '#d1d1d1',
    padding: '15px 25px'
  }
})

/**
 * Form component that is exported byt default.
 */
const Results = ({ classes, searchResults }) => {
  return (
    <Grid
      container
      direction='column'
      className={classes.grayBlock}
    >
      <div>
        <Typography
          className={classes.headline}
          variant='title'
        >
          Search Results
        </Typography>
        <List component="nav">
          {searchResults.map(item =>
            <ListItem key={item.uid}>
              <ListItemText primary={`${item.airline.code} - ${item.airline.name}`} />
              <ListItemText secondary={`
                  ${item.arrival.date} - ${item.arrival.airport.city} - ${item.arrival.airport.code}
                `} 
              />
            </ListItem>
          )}
        </List>
      </div>
    </Grid >
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Results)