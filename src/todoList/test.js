import React from 'react';
import renderer from 'react-test-renderer';
import ToDoList from './index';

describe('ToDoList Should', () => {
  const elJson = renderer.create(<ToDoList />).toJSON();
  it('match a snapshot', () => {
    expect(elJson).toMatchSnapshot();
  });
});
