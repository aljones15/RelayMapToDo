import React from 'react';
import ToDo from '../ToDo/index.jsx';
import {
  ToDoStyle, 
  ToDoAddStyle, 
  ToDoRowStyle,
  AddToTitle,
  AddToDoInput,
  AddToDoSubmit
} from './style';
import {QueryRenderer, graphql} from 'react-relay';
import environment from '../../data/relayEnv';
import AddToDo from './CreateToDoMutation.jsx';

const ToDoList = (props) => {
  const city_id = props.city_id;
  return(
     <QueryRenderer
           environment={environment}
           query={graphql`
             query ToDoListQuery($cityID: Int! $first: Int! $after: String!) {
               city(cityID: $cityID) {
                 todo(first: $first after: $after){
                   edges {
                     cursor
                     node {
                       ...ToDo

                     }
                   }
                 }
               }
             }
          `}
           variables={{
             cityID: city_id,
             first: 5,
             after: "0"
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
                     <h3 style={AddToTitle}>Know Something to do here?</h3>
                     <label htmlFor='addtodo' > To Do:</label>
                     <textarea id='addtodo' type='text' style={ToDoRowStyle}/>
                     <button style={ToDoRowStyle}>Submit</button>
                   </li>
                   { 
                     props.city.todo.edges.map(({cursor, node}, index) => {
                     return(<ToDo data={node} key={index + '_todo'}  />); })
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
