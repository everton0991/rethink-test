import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../../services/Locations/Actions'
import { fetchSearchResults } from '../../services/Search/Actions'

import { Grid } from '@material-ui/core'
import { 
  Main, Header, LinearLoader, Error 
} from '../../common'
import Form from './components/Form'
import BottomAction from './components/Form/BottomAction'
import ItinerariesMenu from './components/Form/ItinerariesMenu '
import TripOptions from './components/Form/TripOptions'
import Results from './components/Results'

/**
 * Here we are mapping our states to this component props
 */
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    locations: state.locations,
    error: state.error,
    searchResults: state.searchResults
  }
}

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origin: '',
      destination: '',
      departure1: '',
      departure2: '',
      type: 'roundtrip',
      passengers: 1
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { fetchLocations } = this.props
    fetchLocations()
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { fetchSearchResults } = this.props
    fetchSearchResults(this.state)
  }

  renderResults = () => {
    const { searchResults } = this.props

    if (searchResults.length > 0) {
      return (
        <Results searchResults={searchResults} />
      )
    }
  }

  render () {
    const { isFetching, error, locations } = this.props
    const { 
      origin, destination, passengers, departure1 
    } = this.state
    
    return (
      <Main>
        <Grid>
          <Header />
          {isFetching && <LinearLoader />}
          <Form>
            <ItinerariesMenu
              handleChange={this.handleChange}
              locations={locations}
              values={this.state}
            />
            <TripOptions 
              handleChange={this.handleChange} 
              values={this.state}
            />
            <BottomAction 
              handleClick={this.handleSubmit} 
              disabled={
                (origin && destination && passengers && departure1) 
                  ? false 
                  : true
              }
            />
          </Form>
          {error && <Error message={error} />}
          {this.renderResults()}
        </Grid>
      </Main>
    )
  }
}

/**
 * Exporting component with the connect Redux wrapper 
 * to map our props and action creators.
 */
export default connect(mapStateToProps, {
  fetchLocations,
  fetchSearchResults
})(Search)