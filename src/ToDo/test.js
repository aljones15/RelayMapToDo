import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ToDo from './index';

const todo = {
  text: 'test',
  likes: 1,
  _id: 1,
};

describe('ToDo Should', () => {
  const elJson = ReactTestRenderer.create(<ToDo data={todo} />).toJSON();
  it('match a snapshot', () => {
    expect(elJson).toMatchSnapshot();
  });
});
