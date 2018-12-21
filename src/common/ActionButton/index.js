import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

/**
 * Component styles.
 */
const styles = ({
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 0,
    textTransform: 'inherit',
    fontSize: '16px',
    fontWeight: 'bold',
    background: '#ffffff',
    color: '#2595ea',
    padding: '25px 20px',
    boxShadow: 'none',
    '&:hover, &.active, &:disabled': {
      boxShadow: 'none',
    },
    '&:disabled': {
      opacity: '0.5'
    }
  },
  iconSize: {
    fontSize: '30px'
  }
})

const ActionButton = ({ ...props }) => {
  const { classes } = props
  
  return (
    <Button
      onClick={props.handleClick}
      variant='contained'
      color='default'
      fullWidth
      disabled={props.disabled}
      className={classes.button}
      style={{ 
        background: props.buttonColor,
        color: props.textColor
      }}
    >
        {props.children}
      <Icon className={classes.iconSize}>
        arrow_right_alt
      </Icon>
    </Button>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(ActionButton)