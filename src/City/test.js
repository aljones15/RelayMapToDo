import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import City from './index';

const City_item = {
  _id: 1
}

describe('map should', () => {
  const elJson = ReactTestRenderer.create(
    <City item={City_item} />
   ).toJSON();
  it('match a snapshot', () => {
    expect(elJson).toMatchSnapshot();
  });
});
