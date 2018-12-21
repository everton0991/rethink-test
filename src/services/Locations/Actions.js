import * as types from '../Types'

/**
 * Fetch the a list of locations.
 */
export const fetchLocations = () => (dispatch, getState, { Api }) => {
  /**
   * Dispatch a request.
   */
  dispatch({ type: types.REQUEST_LOCATIONS_DATA }) 

  /**
   * Fetch from the locations endpoint.
   */
  Api.get('/locations')
    .then(
      response => {
        /**
         * Dispatch the action with the Locations
         */
        dispatch({ 
          type: types.FETCH_LOCATIONS_SUCCESS,
          payload: response.data
        }) 
      }, 
      error => {
        /**
         * Dispatch the error action type.
         */
        dispatch({ 
          type: types.FETCH_LOCATIONS_FAIL,
          payload: error.response.data
        }) 
      }
    )
}
