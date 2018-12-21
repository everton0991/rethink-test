import * as types from './Types'

/**
 * This is the fetching state to control the request.
 * 
 * @param {Boolean} state 
 * @param {Array} action 
 */
export const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_LOCATIONS_DATA:
    case types.REQUEST_SEARCH_DATA:
      return true
    case types.FETCH_LOCATIONS_SUCCESS:
    case types.FETCH_LOCATIONS_FAIL:
    case types.SEARCH_SUCCESS:
    case types.SEARCH_FAIL:
      return false
    default:
      return state
  }
}