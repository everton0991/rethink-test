import * as types from './Types'

/**
 * This is the error state to store the request failed messages.
 * 
 * @param {Boolean} state 
 * @param {Array} action 
 */
export const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_LOCATIONS_FAIL:
    case types.SEARCH_FAIL:
      return action.payload
    case types.REQUEST_LOCATIONS_DATA:
    case types.FETCH_LOCATIONS_SUCCESS:
    case types.SEARCH_SUCCESS:
    case types.REQUEST_SEARCH_DATA:
      return null
    default:
      return state
  }
}