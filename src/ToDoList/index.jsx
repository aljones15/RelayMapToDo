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
import {QueryRenderer, graphql, createPaginationContainer} from 'react-relay';
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

class ToDoPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('ToDoPage -> props');
    console.log(this.props);
    this.props.relay.loadMore(5, e =>{ console.log(e)});
  }
  render(){  
    return(
      <ul className='ToDoUl' style={ToDoStyle}>
        <li 
          style={ToDoAddStyle} 
          onClick={() => AddToDo(this.props.city_id, "test")}>
          <h3 style={AddToTitle}>Know Something to do here?</h3>
          <label htmlFor='addtodo' > To Do:</label>
          <textarea id='addtodo' type='text' style={ToDoRowStyle}/>
          <button style={ToDoRowStyle}>Submit</button>
       </li>
     </ul>
  )
  }
}

const ToDoPagination = createPaginationContainer(
  ToDoPage,
  {
    todo: graphql`
      fragment ToDoList_todo on City {
        todo(
          first: 5
          after: "1"
        ) @connection(key: "ToDoConnection_todo"){
          edges {
            node {
              ...ToDo
              }
            }
          }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      console.log('getConnectionFromProps');
      console.log(props);
      return props.todo;
    },
    getFragmentVariables(prevVars, totalCount) {
      console.log('Get Fragment Variable');
      return {
        first: prevVars.first,
        last: preVars.last,
        count: totalCount,
        city_id: this.props.city_id
      };
    },
    getVariables(one, two, three) {
      console.log('getVariables');
      console.log(one);
      console.log(two);
      console.log(three);
    },
    query: graphql`
             query ToDoListQuery($cityID: Int! $first: Int! $after: String!) {
               city(cityID: $cityID) {
                 ...ToDoList_todo               
               }
             }`
  }
);


//export default ToDoList
export default ToDoPagination
