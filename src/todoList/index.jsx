import React from 'react';
import ToDo from '../todo/index.jsx';
import {ToDoStyle, ToDoAddStyle} from './style';

const ToDoList = (props) => {
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
