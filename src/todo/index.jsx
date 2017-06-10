import React from 'react';
import ToDoStyle from './style';
import {graphql, createFragmentContainer } from 'react-relay';


const ToDo = createFragmentContainer(
({data}) => {
  return(
    <li style={ToDoStyle}>
      {data._id} | {data.text} | {data.likes}
    </li>		  
  )
},
graphql`
  fragment ToDo on ToDo{
    text
    likes
    _id
  }
`)

export default ToDo
