import { combineReducers } from 'redux'

/**
 * Export all the combined reducers.
 */
import { locations } from '../services/Locations/Reducer'
import { searchResults } from '../services/Search/Reducer'
import { error } from '../services/ErrorReducer'
import { isFetching } from '../services/FetchingReducer'

/**
 * Exporting all the combined reducers from the services.
 */
export default combineReducers({
  locations,
  searchResults,
  error,
  isFetching
})