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

class ToDoPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    /*
    console.log('ToDoPage -> props');
    console.log(this.props);
    this.props.relay.loadMore(5, e =>{ 
      console.log('loadMore ->');
      console.log(e)});
    console.log('isLoading -> ' + this.props.relay.isLoading());
    console.log('hasMore -> ' + this.props.relay.hasMore());
    */
    console.log(this.props.relay.refetchConnection());
  }
  render(){
    console.log('render ->');
    console.log(this.props); 
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
          first: $count
          after: $cursor
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
    getFragmentVariables(preVars, totalCount) {
      console.log('Get Fragment Variable');
      console.log(preVars);
      console.log(totalCount);
      return {
        first: preVars.first || 1,
        after: preVars.after || 5
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      console.log('getVariable');
      console.log('count -> ' + count);
      console.log('cursor -> ' + cursor);
      return {
        count: count || 5,
        cursor: cursor || '1',
        cityID: props.city_id
      };
    },
    query: graphql`
             query ToDoListQuery($cityID: Int! $count: Int! $cursor: String) {
               city(cityID: $cityID) {
                 ...ToDoList_todo               
               }
             }`
    },
);


export default ToDoPagination
