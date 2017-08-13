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
import AddToDo from './CreateToDoMutation.jsx';
import environment from '../../data/relayEnv';

const rootQuery = graphql`
      query ToDoListQuery(
        $cityID: Int! 
        $count: Int! 
        $cursor: String) {
          city(cityID: $cityID) {
            ...ToDoList_todo               
          }
      }`;


class ToDoPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log('ToDoPage ->');
    console.log(this.props);
    const {todo} = this.props; 
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
       {todo.todo.edges.map((todo, index) => <li key={`todo?${index}`} style={ToDoAddStyle}>{todo.node.text}</li>)}
     </ul>
  )
  }
  loadMore(){
    this.props.relay.loadMore(5, e => console.log(e))
  }
}

const ToDoList = createPaginationContainer(
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
                text
                likes
              }
              cursor
            }
            pageInfo {
              endCursor
              hasNextPage
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
      return props.todo && props.todo.todo;
    },
    getFragmentVariables(preVars, totalCount) {
      return {
         ...preVars,
         totalCount         
       };
    },
    getVariables(one, {count, cursor}, frags) {
      return {
        count,
        cursor,
        cityID: one.city_id
      };
    },
    query: rootQuery },
);

const queryRenderer = ({city_id}) => {
  return(
    <QueryRenderer
      environment={environment}
      query={rootQuery}
      variables={{cityID: city_id, count:5, cursor: null}}
           render={
             ({error, props}) => {
               if (error) {
                 return <div>{error.message}</div>;
               } else if (props) {
                 return(
                   <ToDoList city_id={city_id} todo={props.city} />
                )
               }
                 return <div>Loading</div>;
             }
           }
         />
 
  );
};

export default queryRenderer;

