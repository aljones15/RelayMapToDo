import React from 'react';
import renderer from 'react-test-renderer';
import ToDo from './index';

describe('ToDo Should', () => {
  const elJson = renderer.create(<ToDo />).toJSON();
  it('match a snapshot', () => {
    expect(elJson).toMatchSnapshot();
  });
});
