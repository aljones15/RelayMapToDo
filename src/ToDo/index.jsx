import React from 'react';
import style from './style';
import { graphql, createFragmentContainer } from 'react-relay';
import { css } from 'aphrodite';

const ToDo = createFragmentContainer(
  ({ data }) => {
    return (
      <li className={css(style.ToDoContainer)}>
        {data._id} | {data.text} | {data.likes}
      </li>
    );
  },
  graphql`
    fragment ToDo on ToDo {
      text
      likes
      _id
    }
  `
);

export default ToDo;
