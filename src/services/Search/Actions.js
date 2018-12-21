import * as types from '../Types'

/**
 * Fetch the a list of locations.
 */
export const fetchSearchResults = (params) => (dispatch, getState, { Api }) => {
  /**
   * Dispatch a request.
   */
  dispatch({ type: types.REQUEST_SEARCH_DATA }) 

  /**
   * Fetch from the search endpoint.
   */
  Api.get('/search', {params})
    .then(
      response => {
        const { flightList } = response.data.requestedFlightSegmentList[0]
        console.log()
        /**
         * Dispatch the action with the Search data get by the params passed.
         */
        dispatch({ 
          type: types.SEARCH_SUCCESS,
          payload: flightList
        }) 
      }, 
      error => {
        /**
         * Dispatch the error action type.
         */
        dispatch({ 
          type: types.SEARCH_FAIL,
          payload: error.response.data
        }) 
      }
    )
}
