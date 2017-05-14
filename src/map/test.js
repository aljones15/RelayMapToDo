import React from 'react';
import renderer from 'react-test-renderer';
import Map from './index';

describe('map should', () => {
  const mapJson = renderer.create(<Map />).toJSON();
  it('match a snapshot', () => {
    expect(mapJson).toMatchSnapshot();
  });
});
