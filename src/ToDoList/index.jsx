import React from 'react';
import ToDo from '../ToDo/index.jsx';
import {ToDoStyle, ToDoAddStyle} from './style';
import {commitMutation, QueryRenderer, graphql} from 'react-relay';
import environment from '../../data/relayEnv';
import AddToDo from './CreateToDoMutation.jsx';

const ToDoList = (props) => {
  const city_id = props.city_id;
  return(
     <QueryRenderer
           environment={environment}
           query={graphql`
             query ToDoListQuery($cityID: Int!) {
               city(id: $cityID) {
                 todo{
                   ...ToDo
                 }
               }
             }
          `}
           variables={{
             cityID: city_id
           }}
           render={({error, props}) => {
             if(error){
               return <div>{error.message}</div>
             } else if (props) {
               return(
                 <ul className='ToDoUl' style={ToDoStyle}>
                   <li 
                     style={ToDoAddStyle} 
                     onClick={() => AddToDo(city_id, "test")}>
                     Know Something to do here?
                   </li>
                   {	  
                     props.city.todo.map((todo, index) => {
                     return(<ToDo data={todo} key={index + '_todo'}  />); })
                   }
                 </ul>);
             }
             return <div>Loading</div>
           }
          }
      />
  )
}

export default ToDoList
