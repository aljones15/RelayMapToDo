import React from 'react';
import ToDo from '../ToDo/index.jsx';
import {ToDoStyle, ToDoAddStyle} from './style';
import {QueryRenderer, graphql} from 'react-relay';
import environment from '../../data/relayEnv';

const ToDoList = (props) => {
  console.log(props);
  return( 
    <ul className='ToDoUl' style={ToDoStyle}>
    <li style={ToDoAddStyle} >Know Something to do here?</li>
    {	  
      props.list.map((todo, index) => <ToDo key={index + '_todo'}  />)
    }
    </ul>
  )
}

export default ToDoList
