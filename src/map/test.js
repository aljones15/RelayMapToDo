import React from 'react';
import renderer from 'react-test-renderer';



jest.mock('google-map-react', () => 'GoogleMap' );

import Map from './index';

describe('map should', () => {
  const mapJson = renderer.create(<Map />).toJSON();
  it('match a snapshot', () => {
    expect(mapJson).toMatchSnapshot();
  });
});
