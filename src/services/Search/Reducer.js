import * as types from '../Types'

/**
 * This is the Search results data state.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
export const searchResults = (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return action.payload
    case types.SEARCH_FAIL:
    case types.REQUEST_SEARCH_DATA:
      return state
    default:
      return state
  }
}