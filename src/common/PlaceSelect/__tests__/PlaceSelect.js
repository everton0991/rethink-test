import React from 'react'
import { shallow } from 'enzyme'
import PlaceSelect from '../../PlaceSelect'

describe('<PlaceSelect />', () => {
  it('Renders without crashing', () => {
    shallow(<PlaceSelect />)
  })
})