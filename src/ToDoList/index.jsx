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
import _ from 'lodash';

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
    this.state = {text: null, count: 2, page: 0}
  }
  updateText(event){
    this.setState({text: event.target.value});
  }
  makeToDo(todo, index){
    return(<li key={`todo?${index}`} style={ToDoAddStyle}>{todo.node.text}</li>);
  }
  paginateToDo(todos){
    const {count, page} = this.state;
    const pages = _.chunk(todos, count);
    if(pages.length == 0 || !pages[page]){
      return null;
    }
    return pages[page].map(this.makeToDo);
  }
  back(){
    this.setState((pstate, props) => 
      ({page: pstate.page - 1 <= 0 ? 0 : pstate.page - 1}))
  }
  forward(){
    this.loadMore();
    this.setState((pstate, props) => 
      ({page: pstate.page + 1}))

  }
  render(){
    const {todo} = this.props; 
    return(
      <ul className='ToDoUl' style={ToDoStyle}>
        <li 
          style={ToDoAddStyle} 
          onClick={() => AddToDo(this.props.city_id, this.state.text)}>
          <h3 style={AddToTitle}>Know Something to do here?</h3>
          <label htmlFor='addtodo' > To Do:</label>
          <textarea 
            id='addtodo' 
            type='text' 
            style={ToDoRowStyle} 
            onChange={this.updateText.bind(this)}
          />
          <button style={ToDoRowStyle}>Submit</button>
       </li>
       {this.paginateToDo.bind(this)(todo.todo.edges)}
       <li>
         <button onClick={this.back.bind(this)}>Back</button>
         <button onClick={this.forward.bind(this)}>Forward</button>
         <strong>Page: {this.state.page}</strong>
      </li>
      
     </ul>
  )
  }
  loadMore(){
    this.props.relay.loadMore(this.state.count, e => console.log(e))
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

