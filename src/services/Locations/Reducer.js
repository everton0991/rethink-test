import * as types from '../Types'

/**
 * This is the locations data state.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
export const locations = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_LOCATIONS_SUCCESS:
      return action.payload
    case types.FETCH_LOCATIONS_FAIL:
    case types.REQUEST_LOCATIONS_DATA:
      return state
    default:
      return state
  }
}