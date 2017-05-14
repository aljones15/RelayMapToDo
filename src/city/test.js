import React from 'react';
import renderer from 'react-test-renderer';
import City from './index';

describe('map should', () => {
  const elJson = renderer.create(<City />).toJSON();
  it('match a snapshot', () => {
    expect(elJson).toMatchSnapshot();
  });
});
