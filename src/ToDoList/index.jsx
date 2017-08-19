import React from 'react';
import ToDo from '../ToDo/index.jsx';
import { AddToTitle, style } from './style';
import {
  QueryRenderer, 
  graphql, 
  createPaginationContainer
} from 'react-relay';
import AddToDo from './CreateToDoMutation.jsx';
import environment from '../../data/relayEnv';
import _ from 'lodash';
import { css } from 'aphrodite';

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
    return(
      <li 
        key={`todo?${index}`} 
        className={css(style.toDoRow)}>
      {todo.node.text}
      </li>);
  }
  paginateToDo(todos){
    const {count, page} = this.state;
    const pages = _.chunk(todos, count);
    console.log('to dos and pages');
    console.log(todos);
    console.log(pages);
    if(pages.length == 0 || !pages[page]){
      return [];
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
      <div id='todoHolder' className={css(style.toDo)} >
        <form className={css(style.toDo)}>
          <h3  className={css(style.toDoRow, style.selfCenter)}>
            Know Something to do here?
          </h3>
         <textarea 
            id='addtodo' 
            type='text' 
            className={css(style.toDoRow)} 
            onChange={this.updateText.bind(this)}
          />
          <button 
            type='button'
            onClick={() => AddToDo(this.props.city_id, this.state.text)} 
            className={css(style.toDoRow, style.row)}
          >Submit</button>
        </form>
        <ul className='ToDoUl' className={css(style.toDo)}>
               {this.paginateToDo.bind(this)(todo.todo.edges)}
        </ul>
        <div className={css(style.row)}>
          <button 
            className={css(style.pagBtn)} 
            onClick={this.back.bind(this)}>Back
          </button>
          <strong
            className={css(style.pagBtn)} 
          >
            Page: {this.state.page}
          </strong>
          <button 
            className={css(style.pagBtn)} 
            onClick={this.forward.bind(this)}>Forward
          </button>
        </div>
     </div>
  )
  }
  loadMore(){
    this.props.relay.loadMore(this.state.count)
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
