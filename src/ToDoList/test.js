import React from 'react';
import renderer from 'react-test-renderer';
import ToDoList from './index';

describe('ToDoList Should', () => {
  const elJson = renderer
    .create(<ToDoList list={[1, 2, 3]} relay={{}} />)
    .toJSON();
  it('match a snapshot', () => {
    expect(elJson).toMatchSnapshot();
  });
});
