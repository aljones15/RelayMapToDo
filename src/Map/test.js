import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('mapbox-gl/dist/mapbox-gl.js', () => 'GoogleMap');

window.URL.createObjectURL = jest.fn();

import Map from './index';

describe('map should', () => {
  const mapJson = renderer.create(<Map />).toJSON();
  it('match a snapshot', () => {
    expect(mapJson).toMatchSnapshot();
  });
});
